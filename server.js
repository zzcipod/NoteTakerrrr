const express = require('express');
const notesRoute = require('./routes/notes');
const htmlRoute  = require("./routes/htmlRoute")

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use('/api', notesRoute);
app.use("/", htmlRoute)


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));