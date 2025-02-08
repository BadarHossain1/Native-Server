import { Schema, model } from 'mongoose'; //This line imports the Schema and model functions from the mongoose module. Schema is used to define the structure of documents within a collection, and model is used to create a model based on a schema.


export interface NoteDocument{
    title: string;
    description?: string;
} //This block defines a TypeScript interface NoteDocument that specifies the structure of a note document. It includes a title field of type string and an optional description field of type string.


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}) // The schema specifies that each note document will have a title field of type string that is required and trimmed, and an optional description field of type string that is trimmed.

export default model("Note", noteSchema); // This line creates a Mongoose model named Note based on the noteSchema and exports it as the default export of the module. The Note model can be used to interact with the notes collection in the MongoDB database.