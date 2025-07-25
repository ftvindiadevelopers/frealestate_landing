import mysql from 'mysql2/promise';
import { config } from 'dotenv';
config(); // loads .env variables

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'realestate_landing',
};

const db = mysql.createPool(dbConfig);

export default db;