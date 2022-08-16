const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const api = require('./routes/api');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use("/", htmlRoutes)

// GET Route for notesage
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));
