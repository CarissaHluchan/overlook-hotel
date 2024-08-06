import chai from 'chai';
const expect = chai.expect;

const {
    getUsersBookings,
    getUsersPastAndFutureBookings,
    getTotalCost,
} = require('../src/usersBookings.js');

const { bookingsSampleData } = require('../src/data-sample/bookings-sample.js');
const { roomsSampleData } = require('../src/data-sample/rooms-sample.js');


describe('List of a customer\'s bookings', () => {
    it('Should return a list of rooms booked by a given user', () => {
        const userID = 9;
        const bookings = bookingsSampleData;
        const expected = [
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

        const results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });

    it('Should return a list of rooms booked by a different user', () => {
        const userID = 19;
        const bookings = bookingsSampleData;

        const expected = [
            {
                "id": "5fwrgu4i7k55hl6th",
                "userID": 19,
                "date": "2022/02/26",
                "roomNumber": 15,

            },
        ];

        const results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array if the user has no bookings', () => {
        const userID = 51;
        const bookings = bookingsSampleData;

        const expected = [];

        const results = getUsersBookings(userID, bookings);

        expect(results).to.deep.equal(expected);
    });
});

describe('Lists of users past and future bookings', () => {
    it('Should return 2 lists with the users past and future bookings', () => {
        const userID = 43;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);

        const expected = {
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
        };

        const results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should return an empty array for upcoming if there are no future bookings', () => {
        const userID = 13;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);

        const expected = {
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

        const results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });

    it('Should return empty arrays for past and upcoming if there are no bookings', () => {
        const userID = 27;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);

        const expected = {
            past: [],
            upcoming: []
        }

        const results = getUsersPastAndFutureBookings(usersBookings)

        expect(results).to.deep.equal(expected);
    });
});

describe('Total cost of a users bookings', () => {
    it('Should return a number which is the total cost of a users bookings', () => {
        const userID = 9;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);
        const rooms = roomsSampleData;

        const expected = 470.92;

        const results = getTotalCost(usersBookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return zero if a users has no bookings', () => {
        const userID = 51;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);

        const rooms = roomsSampleData;

        const expected = 0;

        const results = getTotalCost(usersBookings, rooms);

        expect(results).to.deep.equal(expected);
    });

    it('Should return zero if there are no rooms', () => {
        const userID = 51;
        const bookings = bookingsSampleData;
        const usersBookings = getUsersBookings(userID, bookings);

        const rooms = [];

        const expected = 0;

        const results = getTotalCost(usersBookings, rooms);

        expect(results).to.deep.equal(expected);
    });
});