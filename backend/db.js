const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'issue_tracker_db',
  password: 'gosala@8331',
  port: 5432
});

module.exports = pool;