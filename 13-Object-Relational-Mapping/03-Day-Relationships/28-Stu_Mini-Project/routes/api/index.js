const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./LocationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travellers', travellerRoutes);
router.use('/location', locationRoutes);
router.use('/trips', tripRoutes);

module.exports = router;