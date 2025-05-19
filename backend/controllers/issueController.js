const { createIssue, getIssues } = require('../models/issueModel');

const postIssue = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const newIssue = await createIssue(title, description, status);
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ error: 'Error creating issue' });
  }
};

const fetchIssues = async (req, res) => {
  try {
    const issues = await getIssues();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching issues' });
  }
};

module.exports = { postIssue, fetchIssues };