const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');
const roomsAvailabeOnDateHeader = document.getElementById('searchedDate')

// const bookThisRoomButton = document.querySelector('.book-room-button');
// const deleteThisBookingButton = document.querySelector('.detele-room-booking');


const mainSearchResults = document.querySelector('.main-search-results');

const loggedInUsersNameHeader = document.getElementById('loggedInUsersNameHeader');

const usersPastBookings = document.querySelector('.user-bookings-section');
const usersFutureBookings = document.querySelector('.future-bookings-section')

export function showLandingPage() {
    unhideElement(landingPage);
    hideElement(loginPage);
    hideElement(userDashboard);
    hideElement(userSearchResultsPage);
}

export function showLoginPage() {
    hideElement(landingPage);
    unhideElement(loginPage);
    hideElement(userDashboard);
    hideElement(userSearchResultsPage);
}

export function showUserDashboard() {
    hideElement(landingPage);
    hideElement(loginPage);
    unhideElement(userDashboard);
    hideElement(userSearchResultsPage);
}

export function showUserSearchResultsPage() {
    hideElement(landingPage);
    hideElement(loginPage);
    hideElement(userDashboard);
    unhideElement(userSearchResultsPage);
}

export function hideElement(element) {
    element.classList.add('hidden')
    element.ariaHidden = 'true';
    element.disabled = 'true';
}
export function unhideElement(element) {
    element.classList.remove('hidden')
    element.ariaHidden = 'flase';
    element.removeAttribute('disabled');
}

export function showLandingPageRoomCards(rooms) {
    mainSearchResults.innerHTML = '';
    rooms.forEach(room => mainSearchResults.innerHTML += createLandingPageRoomCard(room))
}

export function createLandingPageRoomCard(room) {
    // room.number
    return `<article class="booking-card">
    <div class="room-details">
      <div class="room-info">
        <p>Room type:</p>
        <p>Bed size:</p>
        <p>Number of Beds:</p>
        <p>Bidet:</p>
       <p>Room number:</p>
      </div>
     <div class="room-cost">
        <p>Cost per night:</p>
      </div>
    </div>
    <div class="room-response">
      <div class="room-info response">
       <p>${room.roomType}</p>
       <p>${room.bedSize}</p>
       <p>${room.numBeds}</p>
        <p>${room.bidet}</p>
        <p>${room.number}</p>
      </div>
      <div class="room-cost response">
        <p>${room.costPerNight}</p>
      </div>
    </div>
  </article>`
}

export function setRoomsAvailabeOnDateHeader(dateString) {
    if (dateString === '') {
        roomsAvailabeOnDateHeader.classList.add('hidden');
    } else {
        roomsAvailabeOnDateHeader.innerHTML = `on ${dateString}`;
        roomsAvailabeOnDateHeader.classList.remove('hidden');
    }
}

export function updateLoggedInUsersNameHeader(name) {
    loggedInUsersNameHeader.innerHTML = name;
}


export function showLoggedInUsersPastBooking(usersBookings, rooms) {
    usersPastBookings.innerHTML = '';
    usersBookings.forEach(booking => {
        const room = rooms.find(room => room.number === booking.roomNumber);
        usersPastBookings.innerHTML += createLoggedInUsersBookingCard(booking, room);
    });
}

export function showLoggedInUsersFutureBookings(usersBookings, rooms) {
    usersFutureBookings.innerHTML = '';
    usersBookings.forEach(booking => {
        const room = rooms.find(room => room.number === booking.roomNumber);
        usersFutureBookings.innerHTML += createLoggedInUsersBookingCard(booking, room, true);
    });
}

export function createLoggedInUsersBookingCard(userBooking, room, allowDeleteBooking = false) {
    let loggedInUsersBookingCard = `<article class="booking-card" booking-id="${userBooking.id}">
    <div class="room-details">
      <div class="room-info">
        <p>Date:</p>
        <p>Room type:</p>
        <p>Bed size:</p>
        <p>Number of Beds:</p>
        <p>Bidet:</p>
        <p>Room number:</p>
      </div>
      <div class="room-cost">
        <p>Cost per night:</p>
      </div>
    </div>
    <div class="room-response">
      <div class="room-info response">
        <p>${userBooking.date}</p>
        <p>${room.roomType}</p>
       <p>${room.bedSize}</p>
       <p>${room.numBeds}</p>
        <p>${room.bidet}</p>
        <p>${room.number}</p>
      </div>
      <div class="room-cost response">
        <p>${room.costPerNight}</p>
      </div>
    </div>`;
    if (allowDeleteBooking) {
        loggedInUsersBookingCard += `<div class="booking-options">
            <img type="button" class="detele-room-booking" src="./images/delete.png" alt="detele room from booking" booking-id="${userBooking.id}">
        </div>`;
    }
    return loggedInUsersBookingCard;
}

export function displayUsersPastAndFutureBookings(pastAndFutureBookings, rooms) {
    showLoggedInUsersPastBooking(pastAndFutureBookings.past, rooms);
    showLoggedInUsersFutureBookings(pastAndFutureBookings.upcoming, rooms);
}

export function removeBookingCard(bookingId) {
    const bookingCardElement = document.querySelector(`.booking-card[booking-id="${bookingId}"]`);
    bookingCardElement.remove();
}