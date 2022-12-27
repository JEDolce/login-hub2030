const express = require('express');
const dotenv = require('dotenv').config();
const sequelize = require('sequelize');
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middlewares/errorMiddleware');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

// Initiallization
const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(errorHandler);

// synchronizing the db and forcing it to false so we don´t lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log('db has been re sync');
})

// Routes
app.use('/api/users', userRoutes)

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



