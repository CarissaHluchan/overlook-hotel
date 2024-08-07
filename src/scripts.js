/**------------------------// Imports //----------------------------*/
/*--// webpack to use a CSS (SCSS) file //--*/
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
/*---// Images //---*/
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
import { filterRoomsByDateAndType } from './rooms.js'

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

/**--------------------// DOM Nodes //----------------------------*/
/*----// Buttons //----*/
/** Name and Logo */
const goToLandingPageButtons = document.querySelectorAll('.go-to-landing-page-button');
const goToUsersDashboardButtons = document.querySelectorAll('.go-to-user-dashboard-button');
/* Login */
const loginButton = document.querySelector('.login');
const signOutButton = document.querySelector('.sign-out');
const signInButton = document.getElementById('signInButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
/* Search */
const landingPageSearchButton = document.querySelector('.landing-page-search-button');
const userRoomSearchButton = document.querySelector('.user-room-search-button');
const showPastBookingsButton = document.querySelector('.show-past-bookings-button')

/*----// Filters //----*/
const landingPageFilterByDate = document.querySelector('.landing-page .filter-by-date');
const landingPageFilterByRoomType = document.querySelector('.landing-page .filter-by-room-type');

const userSearchFilterByDate = document.querySelector('.user-dashboard .filter-by-date');
const userSearchFilterByRoomType = document.querySelector('.user-dashboard .filter-by-room-type');

/**-------------------// Event Listeners //---------------------------*/
window.addEventListener('load', start);

goToLandingPageButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        start();
    });
});

goToUsersDashboardButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        setupUserDashboard();
    });
});

loginButton.addEventListener('click', showLoginPage);
signOutButton.addEventListener('click', showLandingPage);

showPastBookingsButton.addEventListener('click', (event) => {
    showUserDashboard();
});

userRoomSearchButton.addEventListener('click', (event) => {
    updateUserRoomSearchResults();
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

        .catch(err => {
            alert('There was a error, please try again later.');
        });
});

function addEventListenersToDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-room-booking');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookingId = event.target.getAttribute('booking-id');
            deleteRoomFromBookings(bookingId)
                .then(json => {
                    console.log(json.message);
                })

                .then(() => fetchBookings())
                .then(bookings => {
                    allBookings === bookings;
                })

                .then(() => {
                    allBookings = allBookings.filter(booking => booking.id !== bookingId);
                    removeBookingCard(bookingId);
                    setupUserDashboard();
                })

                .catch(err => {
                    alert('There was an error removing your booking, please try again Later.');
                });
        });
    });
}

function addEventListenersToBookThisRoomButton() {
    const bookThisRoomButton = document.querySelectorAll('.book-room-button');
    bookThisRoomButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const roomNumber = Number(event.target.getAttribute('room-number'));
            const date = userSearchFilterByDate.value.replaceAll('-', '/').trim();
            const userId = loggedInUser.id;

            addRoomToBookings(userId, roomNumber, date)
                .then(json => {
                    allBookings.push(json.newBooking);
                    updateUsersFutureBookings();
                    updateUserRoomSearchResults();
                    console.log(json.message);
                })

                .catch(err => {
                    alert('There was an error adding your booking, please try again Later.');
                });
        });
    });
}

/**------------------------// Functions //------------------------------*/

function start() {
    Promise.all([
        fetchRooms(),
        fetchBookings()]
    )
        .then(data => updateGlobalVariables(...data))
        .catch(err => { alert('There was an error loading this website, please try again later.') })

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

function updateUsersFutureBookings() {
    const pastAndFutureBookings = getUsersPastAndFutureBookings(getUsersBookings(loggedInUser.id, allBookings));
    displayUsersPastAndFutureBookings(pastAndFutureBookings, allRooms);
    showUsersFutureBookingsTotalCost(getTotalCost(pastAndFutureBookings.upcoming, allRooms));
    addEventListenersToDeleteButtons();
    showUserSearchResultsPage();
}

function updateUserRoomSearchResults() {
    const userSearchFilterByDateValue = userSearchFilterByDate.value.replaceAll('-', '/').trim();
    const userSearchFilterByRoomTypeValue = userSearchFilterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        filterRoomsByDateAndType(userSearchFilterByDateValue, userSearchFilterByRoomTypeValue, allRooms, allBookings);

    setRoomsAvailabeOnDateUserSearchHeader(userSearchFilterByDate.value);
    showUsersRoomSearchResults(roomsFilteredByDateAndType);
    addEventListenersToBookThisRoomButton();
    showUserSearchResultsPage();
}