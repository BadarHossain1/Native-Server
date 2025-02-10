import { RequestHandler } from 'express'; //  RequestHandler is a type definition for functions that handle HTTP requests in Express.
import Note, { NoteDocument } from '../models/note';


interface IncomingBody {
    title: string;
    description?: string;
} // Specifies the structure of the incoming request body. 

export const create: RequestHandler = async (req, res) => {
    // const newNote = new Note<NoteDocument>({
    //     title: (req.body as IncomingBody).title,
    //     description: (req.body as IncomingBody).description

    // })
    // await newNote.save();

    const newNote = await Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description
    }); //This block creates a new note document in the database using the Note model's create method. The title and description fields are extracted from the request body, which is cast to the IncomingBody type.
    res.json({ note: { id: newNote._id, title: newNote.title, description: newNote.description } });





}

export const patching: RequestHandler<{ noteId: string }> = async (req, res) => {
    const { noteId } = req.params;
    const { title, description } = req.body as IncomingBody;
    // if (title) {
    //     note.title = title;
    // }
    // if (description) {
    //     note.description = description;
    // }

    const note = await Note.findByIdAndUpdate(noteId, {
        title,
        description
    }, { new: true }); //The { new: true } option ensures that the updated document is returned.
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    note.save();
    res.json({ message: 'Note updated successfully', note });
}

export const deleteShit: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    const removeNote = await Note.findByIdAndDelete(noteId);
    // const note = await Note.findOneAndDelete(noteId);

    if (!removeNote) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully' });
}

export const getNotes: RequestHandler = async (req, res) => {
    const notes = await Note.find();
    res.json({ notes });
}

export const getSingleNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);

    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ note });
}
