const pool = require('../db');

const createIssue = async (title, description, status) => {
  const result = await pool.query(
    'INSERT INTO issues (title, description, status) VALUES ($1, $2, $3) RETURNING *',
    [title, description, status]
  );
  return result.rows[0];
};

const getIssues = async () => {
  const result = await pool.query('SELECT * FROM issues ORDER BY created_at DESC');
  return result.rows;
};

module.exports = { createIssue, getIssues };