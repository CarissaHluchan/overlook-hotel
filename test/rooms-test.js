import chai from 'chai';
const expect = chai.expect;

const { getRoomsByDate, getRoomsByType } = require('../src/rooms.js');

const { bookingsSampleData } = require('../src/data-sample/bookings-sample');
const { roomsSampleData } = require('../src/data-sample/rooms-sample');

describe('List of available rooms by date', () => {
    it('Should return a list of rooms avaialbe on a given date', () => {
        let date = "2022/01/16";

        let bookings = bookingsSampleData;

        let rooms = roomsSampleData;

        let expected = [
            {
                "number": 1,
                "roomType": "residential suite",
                "bidet": true,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 358.4
            },
            {
                "number": 7,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 2,
                "costPerNight": 231.46
            },
            {
                "number": 12,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "twin",
                "numBeds": 2,
                "costPerNight": 172.09
            },
            {
                "number": 15,
                "roomType": "residential suite",
                "bidet": false,
                "bedSize": "full",
                "numBeds": 1,
                "costPerNight": 294.56
            },
            {
                "number": 24,
                "roomType": "suite",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 327.24
            },
        ];

        let results = getRoomsByDate(date, bookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms available on a different given date', () => {
        let date = "2022/04/22";

        let bookings = bookingsSampleData;

        let rooms = roomsSampleData;

        let expected = [
            {
                "number": 1,
                "roomType": "residential suite",
                "bidet": true,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 358.4
            },
            {
                "number": 7,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 2,
                "costPerNight": 231.46
            },
            {
                "number": 12,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "twin",
                "numBeds": 2,
                "costPerNight": 172.09
            },
            {
                "number": 23,
                "roomType": "residential suite",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 2,
                "costPerNight": 176.36
            },
            {
                "number": 24,
                "roomType": "suite",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 327.24
            },
        ];

        let results = getRoomsByDate(date, bookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it ('Should return an error message if an invalue date is entered', () => {
        let date = 'dog';

        let bookings = bookingsSampleData;

        let rooms = roomsSampleData;

        expect(() => getRoomsByDate(date, bookings, rooms)).to.throw('Please enter a valid date.');
    });
});

describe('List of availabe rooms by type', () => {
    it('Should return a list of rooms based on a room type', () => {
        let typeOf = "residential suite";

        let rooms = roomsSampleData;

        let expected = [
            {
                "number": 1,
                "roomType": "residential suite",
                "bidet": true,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 358.4
            },
            {
                "number": 15,
                "roomType": "residential suite",
                "bidet": false,
                "bedSize": "full",
                "numBeds": 1,
                "costPerNight": 294.56
            },
            {
                "number": 23,
                "roomType": "residential suite",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 2,
                "costPerNight": 176.36
            },
        ];

        let results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms based on a different room type', () => {
        let typeOf = "single room";

        let rooms = roomsSampleData;

        let expected = [
            {
                "number": 7,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "queen",
                "numBeds": 2,
                "costPerNight": 231.46
            },
            {
                "number": 12,
                "roomType": "single room",
                "bidet": false,
                "bedSize": "twin",
                "numBeds": 2,
                "costPerNight": 172.09
            },
        ];

        let results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array if the room type is not found', () => {
        let typeOf = "double room";

        let rooms = roomsSampleData;

        let expected = [];

        let results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });
});