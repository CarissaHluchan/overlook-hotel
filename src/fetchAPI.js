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

export const addRoomToBookings = (booking) => {
    fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify(booking),
    })

    .then(response => response.json())
    .then(json => /*do something with json*/)
    .catch(err => /*do something with the error*/)

    /**Required Properties for Request: { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
     * Sample Successful Response: { message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }
     */
}

export const deleteRoomFromBookings = () => {
    fetch(`http://localhost:3001/api/v1/bookings/${booking.id}`/* where<id> will be a number of a booking’s id*/, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(json => /*do something with json*/)
        .catch(err => /*do something with the error*/);

        /**Sample Successful Response: { message: Booking #<id> has been deleted }*/
}


