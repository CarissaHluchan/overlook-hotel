const { bookingsSampleData } = require('./data-sample/bookings-sample');
const { roomsSampleData } = require('./data-sample/rooms-sample');

// const nowTime = () => new Date().getTime();
const nowTime = () => new Date('2022-02-08').getTime();

export const getUsersBookings = (userID = [], bookings) => {
    const usersBookings = bookings.filter(booking => booking.userID === userID);
    return usersBookings;
}

export const getUsersPastAndFutureBookings = (usersBookings) => {
    const now = nowTime();
    const pastAndFutureBookings = usersBookings.reduce((acc, booking) => {
        const bookingValue = new Date(booking.date).getTime();
        if (bookingValue < now) {
            acc.past.push(booking);
        } else {
            acc.upcoming.push(booking);
        }
        return acc;
    }, { past: [], upcoming: [] });
    return pastAndFutureBookings;
}

export const getTotalCost = (usersBookings, rooms) => {
    const usersRooms = usersBookings.map(booking => booking.roomNumber);

    const roomWithThisRoomNumber = rooms.filter(room => {
        if (usersRooms.includes(room.number)) {
            return room;
        }
    });

    const totalCost = roomWithThisRoomNumber.reduce((acc, room) => {
        acc += room.costPerNight;
        return acc;
    }, 0);

    return totalCost;
}