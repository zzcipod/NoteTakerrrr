const notes = require('express').Router();
const fs = require('fs');
const { v4: uuid } = require('uuid');


//POST Route for a new note
notes.post('/notes', async (req, res) => {
    console.log(req.body)

    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        fs.readFile('db/db.json', (err, data) => {
            if (err) {
                console.err(err);
            } else {
                const parsedNote = JSON.parse(data);
                parsedNote.push(newNote);
                fs.writeFile('db/db.json', JSON.stringify(parsedNote, null, 4), (err, data) =>

                    err ? console.error(err) : res.json(data)

                )
            }
        })
    }
})

//Delete Route for a new note
notes.delete(`/notes/:id`, (req, res) => {
    console.log(req.params.id);
    fs.readFile('db/db.json', (err, data) => {
        if (err) {
            console.err(err);
        } else {
            const parsedNote = JSON.parse(data);
            const filteredNoteArray = parsedNote.filter(note => req.params.id !== note.id)
            fs.writeFile('db/db.json', JSON.stringify(filteredNoteArray, null, 4), (err, data) =>

                err ? console.error(err) : res.json(data)

            )
        }
    })
})


// GET Route for for a new notes
notes.get('/notes', (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
        if (err) {
            console.error(err)
        }
        res.json(JSON.parse(data))
    })
}
)


module.exports = notes;