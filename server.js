const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const postRoutes = require('./routes/postRoutes');
const loggerMiddleware = require('./middleware/logger');
const cors = require('cors');

const app = express();
const port = 3000;
const ip = '0.0.0.0';

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// for cross origin
app.use(cors())
// Use the logger middleware
app.use(loggerMiddleware);

// Use the post routes
app.use('/api', postRoutes);

app.listen(port, ip, () => {
  console.log(`Server is running on port ${port}`);
});

// export default app;
