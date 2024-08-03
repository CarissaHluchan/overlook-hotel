// const { usersSampleData } = require('../src/data-sample/users-sample');

export const validateLoginCredentials = (username, password) => {
    if (password !== 'overlook2021') {
        return false;
    }

    if (username.substring(0, 8) !== 'customer') {
        return false;
    }
    
    const customerID = Number(username.substring(8));
    if (isNaN(customerID)) {
        return false;
    }

    return customerID;
}