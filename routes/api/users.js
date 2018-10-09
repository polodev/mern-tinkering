const express = require('express')

const router = express.Router();

/**
 * @route  GET /api/users/test
 * @desc   testing users router
 * @access Public
 */
router.get('/test', (req, res) => res.json({"message": "OK"}))



module.exports = router