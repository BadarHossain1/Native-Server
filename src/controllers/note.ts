import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/note';
import { deleteShit } from './note';

interface IncomingBody {
    title: string;
    description?: string;
}

export const create: RequestHandler = async (req, res) => {
    // const newNote = new Note<NoteDocument>({
    //     title: (req.body as IncomingBody).title,
    //     description: (req.body as IncomingBody).description

    // })
    // await newNote.save();

    await Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description
    });
    res.json({ message: 'I M READING' })





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
    }, { new: true });
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
