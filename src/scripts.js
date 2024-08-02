// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
/**------------------------// Images //----------------------------*/
import './images/turing-logo.png'
import './images/overlooklogo.png'
import './images/overlook.png'
import './images/delete.png'


// console.log('This is the JavaScript entry file - your code begins here.');


/**-----------------// Global Varibles //--------------------------*/
var user = {};
var allBookings = [...bookings];
var allRooms = [...rooms];
var filteredRooms = [...rooms];
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
const goToLandingPageButton = document.querySelector('go-to-laning-page-button');
const goToUsersDashboardButton = document.querySelector('.go-to-user-dashboard-button');
/* Login */
/* Search */
const landingPageSearchButton = document.querySelector('landing-page-search-button');
const userRoomSeachButton = document.querySelector('user-room-search-button');



/**-------------------// Page Views //---------------------------*/
function showLandingPage() {
    landingPage.classList.remove('hidden');
    searchResultsPage.classList.add('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.add('hidden');
}

function showSearchResultsPage() {
    landingPage.classList.add('hidden');
    searchResultsPage.classList.remove('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.add('hidden');
}

function showLoginPage() {
    landingPage.classList.add('hidden');
    searchResultsPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.add('hidden');
}

function showUserDashboard() {
    landingPage.classList.add('hidden');
    searchResultsPage.classList.add('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.remove('hidden');
    userSearchResultsPage.add('hidden');
}

function showUserSearchResultsPage() {
    landingPage.classList.add('hidden');
    searchResultsPage.classList.add('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.remove('hidden');
}
