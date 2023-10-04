const express = require('express');
const router = express.Router();
const items = require('./fakeDb');

router.get('/', (req, res) => {
    res.json(items);
});

// ... other route handlers ...

module.exports = router;
