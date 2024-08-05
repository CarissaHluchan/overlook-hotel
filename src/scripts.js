// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

/**------------------------// Imports //----------------------------*/
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
/*---// Images //---*/
import './images/turing-logo.png'
import './images/overlooklogo.png'
import './images/overlook.png'
import './images/delete.png'

/*---// domUpdates //---*/
import {
    showLandingPage,
    showLoginPage,
    showUserDashboard,
    showUserSearchResultsPage,
    showLandingPageRoomCards,
    setRoomsAvailabeOnDateHeader,
    updateLoggedInUsersNameHeader,
    displayUsersPastAndFutureBookings,
    removeBookingCard,
    showUsersPastBookingsTotalCost,
    showUsersFutureBookingsTotalCost,
    setRoomsAvailabeOnDateUserSearchHeader,
    showUsersRoomSearchResults,

} from './domUpdates.js'

/*---// CORE Functions //---*/
import {
    getRoomsByDate,
    getRoomsByType,
    filterRoomsByDateAndType
} from './rooms.js'

import {
    getUsersBookings,
    getUsersPastAndFutureBookings,
    getTotalCost
} from './usersBookings.js'

import { validateLoginCredentials } from './users.js'

/*---// fetchAPI //---*/
import {
    fetchRooms,
    fetchBookings,
    fetchUsers,
    addRoomToBookings,
    deleteRoomFromBookings
} from './fetchAPI.js'

/**-----------------// Global Varibles //--------------------------*/
var loggedInUser = null;
var allBookings = [];
var allRooms = [];
var filteredRooms = [];
var loggedInUsersBookings = [];
// var roomFilters = { date: '', roomType: '', bedSize: '' };

/**--------------------// DOM Nodes //----------------------------*/
/*----// Page Views //----*/
const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const usersPastBookingsWithHeader = document.querySelector('.user-rooms.past');
const usersRoomSearchResultsWithHeader = document.querySelector('.user-rooms.search');

/*----// Buttons //----*/
/** Name and Logo */
const goToLandingPageButton = document.querySelector('.go-to-landing-page-button');
const goToUsersDashboardButton = document.querySelector('.go-to-user-dashboard-button');
/* Login */
const loginButton = document.querySelector('.login');
const signOutButton = document.querySelector('.sign-out');
const signInButton = document.getElementById('signInButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
/* Search */
const landingPageSearchButton = document.querySelector('.landing-page-search-button');
const userRoomSeachButton = document.querySelector('.user-room-search-button');

/*----// Filters //----*/
const landingPageFilterByDate = document.querySelector('.landing-page .filter-by-date');
const landingPageFilterByRoomType = document.querySelector('.landing-page .filter-by-room-type');

const userSearchFilterByDate = document.querySelector('.user-dashboard .filter-by-date');
const userSearchFilterByRoomType = document.querySelector('.user-dashboard .filter-by-room-type');


/*----// Room card //----*/
const roomResponse = document.querySelector('.room-response');
const roomInfo = document.querySelector('.room-info');
const roomCost = document.querySelector('.room-cost');

/**-------------------// Event Listeners //---------------------------*/
window.addEventListener('load', start);

goToLandingPageButton.addEventListener('click', showLandingPage);
goToUsersDashboardButton.addEventListener('click', showUserDashboard);

loginButton.addEventListener('click', showLoginPage);
signOutButton.addEventListener('click', showLandingPage);

userRoomSeachButton.addEventListener('click', (event) => {
    const userSearchFilterByDateValue = userSearchFilterByDate.value.replaceAll('-', '/').trim();
    const userSearchFilterByRoomTypeValue = userSearchFilterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        filterRoomsByDateAndType(userSearchFilterByDateValue, userSearchFilterByRoomTypeValue, allRooms, allBookings);

    console.log({
        userSearchFilterByDate,
        userSearchFilterByRoomType,
        userSearchFilterByDateValue,
        userSearchFilterByRoomTypeValue,
        roomsFilteredByDateAndType,
    });

    setRoomsAvailabeOnDateUserSearchHeader(userSearchFilterByDate.value);
    showUsersRoomSearchResults(roomsFilteredByDateAndType);
    showUserSearchResultsPage();
});


landingPageSearchButton.addEventListener('click', (event) => {
    const landingPageFilterByDateValue = landingPageFilterByDate.value.replaceAll('-', '/').trim();
    const landingPageFilterByRoomTypeValue = landingPageFilterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        filterRoomsByDateAndType(landingPageFilterByDateValue, landingPageFilterByRoomTypeValue, allRooms, allBookings);

    setRoomsAvailabeOnDateHeader(landingPageFilterByDate.value);
    showLandingPageRoomCards(roomsFilteredByDateAndType);
});

signInButton.addEventListener('click', (event) => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const userID = validateLoginCredentials(username, password);
    if (!userID) {
        alert('Please enter a vaild username and password.');
    }
    fetchUsers()
        .then(customers => {
            loggedInUser = customers.find(user => userID === user.id);
            if (!loggedInUser) {
                alert('Please enter a vaild username and password.');
            } else {
                setupUserDashboard();
            }
        })
        .catch(error => {
            console.log({ error });
            alert('There is a error, please try again later.');
        });
});

function addEventListenersToDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.detele-room-booking');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookingId = event.target.getAttribute('booking-id');
            allBookings = allBookings.filter(booking => booking.id !== bookingId);
            removeBookingCard(bookingId);
            // need to add DELETE fetch request. // Do I write that here?
        });
    });

}

function addEventListenersToBookThisRoomButton() {
    const bookThisRoomButton = document.querySelector('.book-room-button');
    bookThisRoomButton.forEach(button => {
        button.addEventListener('click', (event) => {
            addRoomToBookings(loggedInUser.id, roomNumber, date)
            // display booking in upcoming bookings // need the generated booking ID
        });
    });
}

// bookThisRoomButton.addEventListener('click', addRoomToBookings);
/**------------------// DOM functions //------------------------------*/

function start() {
    Promise.all([
        fetchRooms(),
        fetchBookings()]
    )
        .then(data => updateGlobalVariables(...data))
        .catch(err => console.log(err))

    showLandingPage();
}

function updateGlobalVariables(rooms, bookings) {
    allRooms = rooms
    allBookings = bookings
    showLandingPageRoomCards(allRooms);
}

function setupUserDashboard() {
    updateLoggedInUsersNameHeader(loggedInUser.name);
    const pastAndFutureBookings = getUsersPastAndFutureBookings(getUsersBookings(loggedInUser.id, allBookings));
    displayUsersPastAndFutureBookings(pastAndFutureBookings, allRooms);
    showUsersPastBookingsTotalCost(getTotalCost(pastAndFutureBookings.past, allRooms));
    showUsersFutureBookingsTotalCost(getTotalCost(pastAndFutureBookings.upcoming, allRooms));
    addEventListenersToDeleteButtons();
    showUserDashboard();
}