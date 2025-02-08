import express, { RequestHandler } from 'express'; // This line imports the express module and the RequestHandler type from the express package. express is a web framework for Node.js.
import './db';
import noteRouter from './routers/note'; //This line imports the Note model and the NoteDocument type from the models/note module. The Note model is used to interact with the notes collection in the database.

// create a server

const app = express(); // This line creates an instance of an Express application.
app.use(express.json()); //This line adds middleware to parse incoming JSON requests and make the parsed data available in req.body.
app.use(express.urlencoded({ extended: false })); // This line adds middleware to parse incoming URL-encoded requests and make the parsed data available in req.body.

// The explanation of above two lines is below.
// app.use((req, res,next) =>{
//     // Manipulate this here
//     // read the data and we want to add that to the req.body
//     req.on("data", (chunk) => {
//         req.body = JSON.parse(chunk);
//         next();

//     });

// })

app.use("/note",noteRouter); // This line mounts the noteRouter on the /note path. Any requests to /note will be handled by the routes defined in noteRouter.


// Listen to a port

app.listen(8000, () => {
    console.log('server running on localhost:8000');
});