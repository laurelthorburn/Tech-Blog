const { User } = require('../models');

const userdata = [
    {
    "username": "laureltee",
    "password": "fakepassword123"
},
    {
    "username": "seankee",
    "password": "fakepassword1234"
},
    {
    "username": "robertpee",
    "password": "fakepassword12345"
}
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;