const { bookingsSampleData } = require('./data-sample/bookings-sample');
const { roomsSampleData } = require('./data-sample/rooms-sample');

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
    const usersRooms = usersBookings.map(booking => booking.roomNumber)
    const roomCosts = rooms.filter(room => {
        if (usersRooms.includes(room.number)) {
            return room
        }
    })
    const totalCost = roomCosts.reduce((acc, room) => {
        acc += room.costPerNight
        return acc
    }, 0)
    return totalCost
}