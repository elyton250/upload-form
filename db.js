const mongoose = require('mongoose');

const password = encodeURIComponent('Rwanda@123456');
const uri = `mongodb+srv://nelysemathieu:${password}@upload1.yep7wbk.mongodb.net/?retryWrites=true&w=majority&appName=upload1`;

const clientOptions = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};

const dbConnect = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = dbConnect;
