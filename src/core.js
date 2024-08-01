const { bookingsSampleData } = require('../src/data-sample/bookings-sample');
const { roomsSampleData } = require('../src/data-sample/rooms-sample');
const { customersSampleData } = require('../src/data-sample/customers-sample');

// console.log(bookingsSampleData )

export const getRoomsByDate = (date, bookings, rooms) => {
    // date entered will always need to be a string in yyyy/mm/dd form
    const bookingByDate = bookings.filter(booking => booking.date === date);
    const bookedRooms = bookingByDate.map(booking => booking.roomNumber);
    const availableRooms = rooms.filter(room => !bookedRooms.includes(room.number));
    return availableRooms;
}

export const getRoomsByType = (typeOf = [], rooms) => {
    const roomTypes = rooms.filter(room => room.roomType === typeOf);
    return roomTypes
}

export const getUsersBookings = (userID = [], bookings) => {
    const usersBookings = bookings.filter(booking => booking.userID === userID);
    return usersBookings
}

export const getUsersPastAndFutureBookings = (usersBookings) => {
    const now = new Date().valueOf();
    const pastAndFutureBookings = usersBookings.reduce((acc, booking) => {
        const bookingValue = new Date(booking.date).valueOf();
        if (bookingValue < now) {
            acc.past.push(booking)
        } else {
            acc.upcoming.push(booking)
        }
        return acc
    }, { past: [], upcoming: [] });
    return pastAndFutureBookings;
}

export const getTotalCost = (usersBookings, rooms) => {
    // iterate through a users booking
}

export const addRoomToBookings = () => { }

export const deleteRoomFromBookings = () => { }