export function fetchRooms() {
    return fetch('http://localhost:3001/api/v1/rooms')
        .then(response => response.json())
        .then(data => data.rooms);
}

export function fetchBookings() {
    return fetch('http://localhost:3001/api/v1/bookings')
        .then(response => response.json())
        .then(data => data.bookings);
}

export function fetchUsers() {
    return fetch('http://localhost:3001/api/v1/customers')
        .then(response => response.json())
        .then(data => data.customers);
}

export function addRoomToBookings(userId, roomNumber, date) {
    return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userID": userId,
            "date": date,
            "roomNumber": roomNumber 
        }),
    })

        .then(response => response.json());
}

export function deleteRoomFromBookings(bookingId) {
    return fetch(`http://localhost:3001/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
    })
        .then(response => response.json());
}