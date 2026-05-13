import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Srijan@0922',
  database: 'note3_app',
});

export default db;