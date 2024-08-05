/**--------------------// DOM Nodes //----------------------------*/
/*----// Page Views //----*/
const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const usersPastBookingsWithHeader = document.querySelector('.user-rooms-past');
const usersRoomSearchResultsWithHeader = document.querySelector('.user-rooms-search');

/*----// Landing Page //----*/
const roomsAvailabeOnDateHeader = document.getElementById('searchedDate');
const mainSearchResults = document.querySelector('.main-search-results');

/*----// userDashboard Page //----*/
const loggedInUsersNameHeader = document.getElementById('loggedInUsersNameHeader');
const usersPastBookings = document.querySelector('.user-bookings-section');
const usersFutureBookings = document.querySelector('.future-bookings-section');
const usersPastBookingsTotalCost = document.querySelector('.total-cost.past span');
const usersFutureBookingsTotalCost = document.querySelector('.total-cost.upcoming span');
const roomsAvailabeOnDateUserSearchHeader = document.getElementById('userSearchDates');
const usersRoomSearchResults = document.querySelector('.user-rooms-search .user-bookings-section');

/**--------------------// Page Views //----------------------------*/
export function showLandingPage() {
    unhideElement(landingPage);
    hideElement(loginPage);
    hideElement(userDashboard);
}

export function showLoginPage() {
    hideElement(landingPage);
    unhideElement(loginPage);
    hideElement(userDashboard);
}

export function showUserDashboard() {
    hideElement(landingPage);
    hideElement(loginPage);
    unhideElement(userDashboard);
    unhideElement(usersPastBookingsWithHeader);
    hideElement(usersRoomSearchResultsWithHeader);
}

export function showUserSearchResultsPage() {
    hideElement(landingPage);
    hideElement(loginPage);
    unhideElement(userDashboard);
    hideElement(usersPastBookingsWithHeader);
    unhideElement(usersRoomSearchResultsWithHeader);
}

/**--------------------// Functions //----------------------------*/
export function hideElement(element) {
    element.classList.add('hidden');
    element.ariaHidden = 'true';
    element.disabled = 'true';
}
export function unhideElement(element) {
    element.classList.remove('hidden');
    element.ariaHidden = 'flase';
    element.removeAttribute('disabled');
}

export function showLandingPageRoomCards(rooms) {
    mainSearchResults.innerHTML = '';
    rooms.forEach(room => mainSearchResults.innerHTML += createLandingPageRoomCard(room))
    if (!rooms.length) {
      mainSearchResults.innerHTML = '😢 We are so very sorry!!!😢 There are no rooms available that match your search criteria. Please try again.';
    }
}

export function createLandingPageRoomCard(room) {
    return `<article roll="listitem" class="booking-card">
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
        <p>$${room.costPerNight}</p>
      </div>
    </div>
  </article>`;
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
    let loggedInUsersBookingCard = `<article roll="listitem" class="booking-card" booking-id="${userBooking.id}">
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
        <p>$${room.costPerNight}</p>
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

export function showUsersPastBookingsTotalCost(totalCost) {
    usersPastBookingsTotalCost.innerHTML = Number.parseFloat(totalCost).toFixed(2);
}

export function showUsersFutureBookingsTotalCost(totalCost) {
    usersFutureBookingsTotalCost.innerHTML = Number.parseFloat(totalCost).toFixed(2);
}

export function setRoomsAvailabeOnDateUserSearchHeader(dateString) {
    roomsAvailabeOnDateUserSearchHeader.innerHTML = dateString;
}

export function showUsersRoomSearchResults(rooms) {
  usersRoomSearchResults.innerHTML = '';
  rooms.forEach(room => usersRoomSearchResults.innerHTML += createUserSearchRoomCard(room));
  if (!rooms.length) {
    usersRoomSearchResults.innerHTML += noSearchRusultsMessage();
  }
}

export function createUserSearchRoomCard(room) {
    return `<article roll="listitem" class="booking-card">
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
                  <p>$${room.costPerNight}</p>
                </div>
              </div>
              <form class="booking-options">
                <button room-number="${room.number}" type="button" class="book-room-button">Book this Room</button>
              </form>
            </article>`;
}

export function noSearchRusultsMessage() {
  return `<article roll="listitem" class="booking-card">
          <p>😢 We are so very sorry!!!😢 <br>
          There are no more rooms available that match your search criteria. <br>
          Please adjust your search criteria and try again.</p>
        </article>`
}