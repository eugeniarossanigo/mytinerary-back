var express = require('express');
var router = express.Router();

const { createActivity, readAllActivities } = require ('../controllers/activityController')

router.post('/', createActivity)
router.get('/', readAllActivities)

module.exports = router;