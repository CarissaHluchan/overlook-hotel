const landingPage = document.querySelector('.landing-page');
const searchResultsPage = document.querySelector('.search-results-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');

const bookThisRoomButton = document.querySelector('.book-room-button');
const deleteThisBookingButton = document.querySelector('.detele-room-booking');

function showLandingPage() {
    landingPage.classList.remove('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.add('hidden');
}

function showLoginPage() {
    landingPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.add('hidden');
}

function showUserDashboard() {
    landingPage.classList.add('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.remove('hidden');
    userSearchResultsPage.add('hidden');
}

function showUserSearchResultsPage() {
    landingPage.classList.add('hidden');
    loginPage.classList.add('hidden');
    userDashboard.classList.add('hidden');
    userSearchResultsPage.remove('hidden');
}