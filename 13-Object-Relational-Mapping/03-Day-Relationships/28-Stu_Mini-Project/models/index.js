const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongToMany(Location, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'planned_trips',
    forreignKey: 'traveller_id'
});

Location.belongToMany(Traveller, {
    // Define the third table needed to strore the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers',
    foreignKey: 'location_id'
    });

module.exports = { Traveller, Location, Trip};