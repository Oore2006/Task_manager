const express = require('express');
const router = express.Router();

// Define a simple home router
router.get('/', (req, res) => {
    res.send('Welcome to the Express Routing Practice Project');

});

module.exports = router;
