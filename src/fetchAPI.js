export const fetchRooms = () => {
    fetch('http://localhost:3001/api/v1/rooms')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}

export const fetchBookings = () => {
    fetch('http://localhost:3001/api/v1/bookings')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}

export const fetchUsers = () => {
    fetch('http://localhost:3001/api/v1/customers')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}

export const addRoomToBookings = () => { }

export const deleteRoomFromBookings = () => { }


