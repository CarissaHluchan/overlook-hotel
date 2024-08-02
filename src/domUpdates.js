const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const userSearchResultsPage = document.querySelector('.user-search-results-page');

// const bookThisRoomButton = document.querySelector('.book-room-button');
// const deleteThisBookingButton = document.querySelector('.detele-room-booking');

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

