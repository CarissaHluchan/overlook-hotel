import chai from 'chai';
const expect = chai.expect;

const {
    getUsersBookings,
    getUsersPastAndFutureBookings,
    getTotalCost,
} = require('../src/users.js');

const { bookingsSampleData } = require('../src/data-sample/bookings-sample.js');
const { roomsSampleData } = require('../src/data-sample/rooms-sample.js');


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