import chai from 'chai';
const expect = chai.expect;

const { getRoomsByDate, getRoomsByType, filterRoomsByDateAndType } = require('../src/rooms.js');

const { bookingsSampleData } = require('../src/data-sample/bookings-sample');
const { roomsSampleData } = require('../src/data-sample/rooms-sample');

describe('List of available rooms by date', () => {
    it('Should return a list of rooms avaialbe on a given date', () => {
        const date = "2022/01/16";
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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

        const results = getRoomsByDate(date, bookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms available on a different given date', () => {
        const date = "2022/04/22";
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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

        const results = getRoomsByDate(date, bookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return an error message if an invalue date is entered', () => {
        const date = 'dog';
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        expect(() => getRoomsByDate(date, bookings, rooms)).to.throw('Please enter a valid date.');
    });
});

describe('List of availabe rooms by type', () => {
    it('Should return a list of rooms based on a room type', () => {
        const typeOf = "residential suite";
        const rooms = roomsSampleData;

        const expected = [
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

        const results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms based on a different room type', () => {
        const typeOf = "single room";
        const rooms = roomsSampleData;

        const expected = [
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

        const results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array if the room type is not found', () => {
        const typeOf = "double room";
        const rooms = roomsSampleData;

        const expected = [];

        const results = getRoomsByType(typeOf, rooms);

        expect(results).to.deep.equal(expected);
    });
});

describe('Filter rooms by date and type', () => {
    it('Should return all rooms at the hotel if date and type is empty', () => {
        const date = '';
        const typeOf = '';
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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

        const results = filterRoomsByDateAndType(date, typeOf, rooms, bookings)

        expect(results).to.deep.equal(expected);
    })

    it('Should return a list of rooms filtered by date', () => {
        const date = "2022/01/16";
        const typeOf = '';
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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
        ];;

        const results = filterRoomsByDateAndType(date, typeOf, rooms, bookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should filter a list of rooms by date and type', () => {
        const date = "2022/01/16";
        const typeOf = "single room";
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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
        ];;

        const results = filterRoomsByDateAndType(date, typeOf, rooms, bookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should filter a list of rooms by type only', () => {
        const date = "";
        const typeOf = "residential suite";
        const bookings = bookingsSampleData;
        const rooms = roomsSampleData;

        const expected = [
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

        const results = filterRoomsByDateAndType(date, typeOf, rooms, bookings);

        expect(results).to.deep.equal(expected);
    });
});