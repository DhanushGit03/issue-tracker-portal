const express = require('express');
const { postIssue, fetchIssues } = require('../controllers/issueController');

const router = express.Router();

router.post('/issues', postIssue);
router.get('/issues', fetchIssues);

module.exports = router;