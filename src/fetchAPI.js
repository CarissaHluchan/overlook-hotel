export function fetchRooms() {
    return fetch('http://localhost:3001/api/v1/rooms')
        .then(response => response.json())
        .then(data => data.rooms)
        .catch(error => console.log(error))
}

export function fetchBookings() {
    return fetch('http://localhost:3001/api/v1/bookings')
        .then(response => response.json())
        .then(data => data.bookings)
        .catch(error => console.log(error))
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
            "userID": userId, // how do I get the user ID? validateLoginCredentials?
            "date": date, // Input on search bar...meaning: should this live on the event handeler
            "roomNumber": roomNumber // from the room card selected
            // will this generate an ID for the booking? Can I console.log this?
        }),
    })

        .then(response => response.json() )
        // .then(json => console.log(json))
        .catch(err => console.log(err));

    /**Required Properties for Request: { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
     * Sample Successful Response: { message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }
     */
}

// export const addRoomToBookings = (booking) => {
//     fetch('http://localhost:3001/api/v1/bookings', {
//         method: 'POST',
//         body: JSON.stringify(booking),
//     })

//     .then(response => response.json())
//     .then(json => /*do something with json*/)
//     .catch(err => /*do something with the error*/)

//     /**Required Properties for Request: { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
//      * Sample Successful Response: { message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }
//      */
// }

export function deleteRoomFromBookings(bookingId) {
    return fetch(`http://localhost:3001/api/v1/bookings/${bookingId}`/* where<id> will be a number of a booking’s id*/, {
        method: 'DELETE',
    })
        .then(response => response.json())
        // .then(json => console.log(json))
        .catch(err => console.log(err));

    /**Sample Successful Response: { message: Booking #<id> has been deleted }*/
}

// export const deleteRoomFromBookings = () => {
//     fetch(`http://localhost:3001/api/v1/bookings/${booking.id}`/* where<id> will be a number of a booking’s id*/, {
//         method: 'POST',
//       })
//         .then(response => response.json())
//         .then(json => /*do something with json*/)
//         .catch(err => /*do something with the error*/);

//         /**Sample Successful Response: { message: Booking #<id> has been deleted }*/
// }


