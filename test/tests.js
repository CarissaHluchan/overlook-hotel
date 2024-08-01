import chai from 'chai';
const expect = chai.expect;

const { getRoomsByDate,
        getRoomsByFilter,
        getRoomsByFilterOnly,
        getUsersPastBookings,
        getUsersFutureBookings,
        getTotalCost,
        addRoomToBookings,
        deleteRoomFromBookings
 } = require('../src/core.js');

const controlBookings = require('../src/data-sample/bookings-sample');
const controlRooms = require('../src/data-sample/rooms-sample');
const controlCustomer = require('../src/data-sample/customers-sample');

// describe('See if the tests are running', function() {
//   it('should return true', function() {
//     expect(true).to.equal(true);
//   });
// });

// describe('', () => {
//     it('', () => {

//     });
// });

describe('List of available rooms by date', () => {
    it('Should return a list of rooms avaialbe on a given date', () => {
        let date = "2022/01/16";
        
        let bookings = controlBookings;

        let rooms = controlRooms;

        let availableRooms = [
            { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2022/04/22", "roomNumber": 15, },
            { "id": "5fwrgu4i7k55hl6th", "userID": 19, "date": "2022/02/26", "roomNumber": 15, },
            { "id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2022/01/24", "roomNumber": 24, },
            { "id": "5fwrgu4i7k55hl6t6", "userID": 13, "date": "2022/01/10", "roomNumber": 12, },
            { "id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2022/02/16", "roomNumber": 7, },
            { "id": "5fwrgu4i7k55hl6t8", "userID": 1, "date": "2022/02/05", "roomNumber": 12, },
        ]

        let roomsByDate = getRoomsByDate( date, bookings, rooms );

        expect(roomsByDate).to.deep.equal(availableRooms);
    });
});