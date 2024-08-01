import chai from 'chai';
const expect = chai.expect;

const { getRoomsByDate,
    getRoomsByType,
    getUsersBookings,
    getUsersPastAndFutureBookings,
    getTotalCost,
    addRoomToBookings,
    deleteRoomFromBookings
} = require('../src/core.js');

const { bookingsSampleData } = require('../src/data-sample/bookings-sample');
const { roomsSampleData } = require('../src/data-sample/rooms-sample');
const { customersSampleData } = require('../src/data-sample/customers-sample');

// describe('', () => {
//     it('', () => {

//     });
// });

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

    it('Should return a list of rooms avaialbe on a different given date ', () => {
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

describe('List of a customer\'s bookings', () => {
    it('Should return a list of rooms booked by a given user', () => {
        let userID = 9;

        let bookings = bookingsSampleData;

        let expected = [
            {
                "id": "5fwrgu4i7k55hl6sz",
                "userID": 9,
                "date": "2022/04/22",
                "roomNumber": 15,

            },
            {
                "id": "5fwrgu4i7k55hl6vu",
                "userID": 9,
                "date": "2022/01/16",
                "roomNumber": 23,

            },
        ];

        let results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms booked by a different user', () => {
        let userID = 19;

        let bookings = bookingsSampleData;

        let expected = [
            {
                "id": "5fwrgu4i7k55hl6th",
                "userID": 19,
                "date": "2022/02/26",
                "roomNumber": 15,

            },
        ];

        let results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array if the user has no bookings', () => {
        let userID = 51;

        let bookings = bookingsSampleData;

        let expected = [];

        let results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });
});

describe('Lists of users past and future bookings', () => {
    it('Should return 2 lists witht the users past and future bookings', () => {
        let userID = 43;

        let bookings = bookingsSampleData;

        let usersBookings = getUsersBookings(userID, bookings);

        let expected = {
            past: [
                {
                    id: '5fwrgu4i7k55hl6t5',
                    userID: 43,
                    date: '2022/01/24',
                    roomNumber: 24
                },
            ],
            upcoming: [
                {
                    id: '5fwrgu4i7k55hl6s2',
                    userID: 43,
                    date: '2024/12/24',
                    roomNumber: 24
                },
            ]
        }

        let results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array for upcoming if there are no future bookings', () => {
        let userID = 13;

        let bookings = bookingsSampleData;

        let usersBookings = getUsersBookings(userID, bookings);

        let expected = {
            past: [
                {
                    "id": "5fwrgu4i7k55hl6t6",
                    "userID": 13,
                    "date": "2022/01/10",
                    "roomNumber": 12,

                },
            ],
            upcoming: []
        }

        let results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should return empty arrays for past and upcoming if there are no bookings', () => {
        let userID = 27;

        let bookings = bookingsSampleData;

        let usersBookings = getUsersBookings(userID, bookings);

        let expected = {
            past: [],
            upcoming: []
        }

        let results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });
});

describe('Total cost of a users bookings', () => {
    it('Should return a number which is the total cost of a users bookings', () => {
        let userID = 9;

        let bookings = bookingsSampleData;

        let usersBookings = getUsersBookings(userID, bookings);

        let rooms = roomsSampleData;
        
        let expected = 470.92;

        let results = getTotalCost(usersBookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return zero if a users has no bookings', () => {
        let userID = 51;

        let bookings = bookingsSampleData;

        let usersBookings = getUsersBookings(userID, bookings);

        let rooms = roomsSampleData;
        
        let expected = 0;

        let results = getTotalCost(usersBookings, rooms);

        expect(results).to.deep.equal(expected);
    });
});