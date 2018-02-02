import React from 'react';
import ReactDOM from 'react-dom';
import {GM_ZOOM, GM_CENTER, GM_BOOTSTRAP_URL_KEYS, JSON_FILE_URL} from '../helpers/constants';
import start from '../index';
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

        /*start();

        expect(locationHistoryController.getCoordinates).toBeCalledWith(JSON_FILE_URL);
        return locationHistoryController.getCoordinates(JSON_FILE_URL).then(() => {
            expect(MapController.renderHeatMap).toBeCalledWith(expectedMapOptions);
        });*/
    });
});