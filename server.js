const express = require('express');
const dotenv = require('dotenv');

// Router files
const bootcampsRouter = require('./routes/bootcamps'); 


const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcampsRouter);


// Load env vars
dotenv.config({path: './config/config.env'});

const PORT = process.env.PORT || 5000;

app.listen(PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))