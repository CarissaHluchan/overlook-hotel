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
import './domUpdates.js'

/*---// CORE Functions //---*/
import './users.js'
import './rooms.js'

/*---// fetchAPI //---*/
import {
    fetchRooms,
    fetchBookings,
    fetchUsers,
    addRoomToBookings,
    deleteRoomFromBookings
} from './fetchAPI.js'

/**-----------------// Global Varibles //--------------------------*/
// var user = {};
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
const goToLandingPageButton = document.querySelector('.go-to-laning-page-button');
const goToUsersDashboardButton = document.querySelector('.go-to-user-dashboard-button');
/* Login */
const loginButton = document.querySelector('.login');
const signOutButton = document.querySelector('.sign-out');
/* Search */
const landingPageSearchButton = document.querySelector('.landing-page-search-button');
const userRoomSeachButton = document.querySelector('.user-room-search-button');
/* Booking */
const bookThisRoomButton = document.querySelector('.book-room-button');
const deleteThisBookingButton = document.querySelector('.detele-room-booking');

/*----// Filters //----*/
const filterByDate = document.querySelector('.filter-by-date');
const filterByRoomType = document.querySelector('.filter-by-room-type');

/**-------------------// Event Listeners //---------------------------*/
window.addEventListener('load', start);

goToLandingPageButton.addEventListener('click', showLandingPage);
goToUsersDashboardButton.addEventListener('click', showUserDashboard);

loginButton.addEventListener('click', showLoginPage);
signOutButton.addEventListener('click', showLandingPage);

landingPageSearchButton.addEventListener('click', getLandingPageSearchResults);
userRoomSeachButton.addEventListener('click', showUserSearchResultsPage);

bookThisRoomButton.addEventListener('click', addRoomToBookings);
deleteThisBookingButton.addEventListener('click', deleteRoomFromBookings);

// console.log(filterByDate)
filterByDate.addEventListener('change', event => {
    // console.log('TRIGGERED', event.target.value)
})

/**------------------// DOM functions //------------------------------*/

function start() {
    getLandingPageAllRooms()
}

function getLandingPageAllRooms() {
    fetchRooms()
}

function getLandingPageSearchResults() {}