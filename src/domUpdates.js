const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');
const roomsAvailabeOnDateHeader = document.getElementById('searchedDate')

// const bookThisRoomButton = document.querySelector('.book-room-button');
// const deleteThisBookingButton = document.querySelector('.detele-room-booking');


const mainSearchResults = document.querySelector('.main-search-results');

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