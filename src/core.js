const { bookingsSampleData } = require('../src/data-sample/bookings-sample');
const { roomsSampleData } = require('../src/data-sample/rooms-sample');
const { customersSampleData } = require('../src/data-sample/customers-sample');

// console.log(bookingsSampleData )

export const getRoomsByDate = ( date, bookings, rooms ) => {
    // date entered will always need to be a string in yyyy/mm/dd form
    const bookingByDate = bookings.filter(booking => booking.date === date);
    const bookedRooms = bookingByDate.map(booking => booking.roomNumber);
    const availableRooms = rooms.filter(room => !bookedRooms.includes(room.number));
    return availableRooms;
}

export const getRoomsByType = ( typeOf = [], rooms ) => {
    const roomTypes = rooms.filter(room => room.roomType === typeOf)
    return roomTypes
}

export const getUsersPastBookings = () => {}

export const getUsersFutureBookings = () => {}

export const getTotalCost = () => {}

export const addRoomToBookings = () => {}

export const deleteRoomFromBookings = () => {}