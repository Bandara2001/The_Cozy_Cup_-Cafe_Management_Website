import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter.js';
import sequelize from './config/db.js';
import cors from 'cors'; // Import cors

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4951;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});