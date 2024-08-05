import chai from 'chai';
const expect = chai.expect;

const { validateLoginCredentials } = require('../src/users.js');

describe('Validate loing credentials', () => {
    it('Should return false if password is invalid', () => {
        const username = 'customer50';
        const password = 'kitty';

        const expected = false;

        const results = validateLoginCredentials(username, password);

        expect(results).to.equal(expected);
    });

    it('Should return false if username is invalid', () => {
        const username = 'xxxxxxxx50';
        const password = 'overlook2021';

        const expected = false;

        const results = validateLoginCredentials(username, password);

        expect(results).to.equal(expected);
    });

    it('Should return the user\'s ID if they login with valid credentials', () => {
        const username = 'customer50';
        const password = 'overlook2021';

        const expected = 50;

        const results = validateLoginCredentials(username, password);

        expect(results).to.equal(expected);
    });

    it('Should return false if the customer id is invalid', () => {
        const username = 'customerAB';
        const password = 'overlook2021';

        const expected = false;

        const results = validateLoginCredentials(username, password);

        expect(results).to.equal(expected);
    })
});