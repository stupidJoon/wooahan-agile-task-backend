const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'test'
});

module.exports.selectNumber = async () => {
  const connection = await pool.getConnection(async conn => conn);
  const [rows, fields] = await connection.query('SELECT number FROM number');
  connection.release();
  return rows[0]['number'];
}

module.exports.addNumber = async (number) => {
  const connection = await pool.getConnection(async conn => conn);
  await connection.query('UPDATE number SET number = (SELECT number FROM number) + ?', [number]);
}

module.exports.updateNumber = async (number) => {
  const connection = await pool.getConnection(async conn => conn);
  await connection.query('UPDATE number SET number = ?', [number]);
}
