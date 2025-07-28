import mysql from 'mysql2/promise';

export async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER ||  'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'realestate_landing',
    });
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
export async function closeDatabaseConnection(connection) {
  try {
    await connection.end();
  } catch (error) {
    console.error('Error closing the database connection:', error);
  }
}