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
        ] 

        let roomsByDate = getRoomsByDate( date, bookings, rooms );

        expect(roomsByDate).to.deep.equal(availableRooms);
    });
});