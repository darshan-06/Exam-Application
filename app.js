const PORT = process.env.PORT || 7000;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./api/route');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(cors());
app.use('', routes);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


app.listen(PORT, () => {
    console.log(`Server started at port http://localhost:${PORT}`);
  });