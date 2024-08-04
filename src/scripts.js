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
// var allBookings = [...bookings];
// var allRooms = [...rooms];
// var filteredRooms = [...rooms];
var roomFilters = { date: '', roomType: '', bedSize: '' };

/**--------------------// DOM Nodes //----------------------------*/
/*----// Page Views //----*/
const landingPage = document.querySelector('.landing-page');
const searchResultsPage = document.querySelector('.search-results-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');

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
/* Booking */
const bookThisRoomButton = document.querySelector('.book-room-button');

/*----// Filters //----*/
const filterByDate = document.querySelector('.filter-by-date');
const filterByRoomType = document.querySelector('.filter-by-room-type');

/*----// Room card //----*/
const roomResponse = document.querySelector('.room-response')
const roomInfo = document.querySelector('.room-info')
const roomCost = document.querySelector('.room-cost')

/**-------------------// Event Listeners //---------------------------*/
window.addEventListener('load', start);

goToLandingPageButton.addEventListener('click', showLandingPage);
goToUsersDashboardButton.addEventListener('click', showUserDashboard);

loginButton.addEventListener('click', showLoginPage);
signOutButton.addEventListener('click', showLandingPage);

// landingPageSearchButton.addEventListener('click', getLandingPageRoomsSearchResults);
userRoomSeachButton.addEventListener('click', showUserSearchResultsPage);

bookThisRoomButton.addEventListener('click', addRoomToBookings);

landingPageSearchButton.addEventListener('click', (event) => {
    const filterByDateValue = filterByDate.value.replaceAll('-', '/').trim();
    const filterByRoomTypeValue = filterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        filterRoomsByDateAndType(filterByDateValue, filterByRoomTypeValue, allRooms, allBookings);

    setRoomsAvailabeOnDateHeader(filterByDate.value);
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
        });
    });

}

// const deleteThisBookingButton = document.querySelectorAll('.detele-room-booking');
// console.log({
//     deleteThisBookingButton,
// });
// deleteThisBookingButton.addEventListener('click', (event) => {
//     console.log('DELETE WAS CLICKED');
// });

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
    // console.log('ROOMS:', rooms.rooms)
    allRooms = rooms
    // console.log('BOOKINGS:', bookings)
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