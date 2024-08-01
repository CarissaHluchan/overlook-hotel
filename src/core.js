const controlBookings = require('../src/data-sample/bookings-sample');
const controlRooms = require('../src/data-sample/rooms-sample');
const controlCustomer = require('../src/data-sample/customers-sample');

export const getRoomsByDate = ( date, bookings, rooms ) => {
    const booking = bookings.filter(booking => {
        if (booking.date === date) {
            return booking
        }
    })
    // console.log(booking)
    const availableRooms = rooms.filter(room =>

    )
}

getRoomsByDate( "2022/01/16", controlBookings, controlRooms)


export const getRoomsByFilter = () => {}

export const getRoomsByFilterOnly = () => {}

export const getUsersPastBookings = () => {}

export const getUsersFutureBookings = () => {}

export const getTotalCost = () => {}

export const addRoomToBookings = () => {}

export const deleteRoomFromBookings = () => {}