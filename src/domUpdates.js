const landingPage = document.querySelector('.landing-page');
const searchResultsPage = document.querySelector('.search-results-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');

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