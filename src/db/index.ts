import mongoose from 'mongoose'; // This line imports the mongoose module, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.



mongoose.set('strictQuery', true); // This line sets the strictQuery option to true. This option ensures that only fields defined in the schema are allowed in queries, which can help prevent accidental or malicious query injections.
mongoose.connect("mongodb://localhost:27017/note-app").then(() => {
    console.log('Connected to the database');
}
).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
});