const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue("New node is Added...!"))
    } else {
        console.log(chalk.red("Title is already present...Try again with different one!"))
    }
}
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.red('Note Removed Successfully!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.blue.inverse('No Title Present'))
    }
}
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => console.log(chalk.blue(note.title)))
}
const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find(note => note.title === title)
    if(findNote) {
        console.log(chalk.green(findNote.title))
        console.log(chalk.yellow(findNote.body))
    } else {
        console.log(chalk.red(`Unable to find Note`))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}