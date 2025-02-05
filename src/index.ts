import express from 'express';
import './db';
import Note from './models/note';

// create a server

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The explanation of above two lines is below.
// app.use((req, res,next) =>{
//     // Manipulate this here
//     // read the data and we want to add that to the req.body
//     req.on("data", (chunk) => {
//         req.body = JSON.parse(chunk);
//         next();
        
//     });

// })





app.post('/', (req,res) => {
    console.log(req.body);
    res.send('Hello World!!!!!');
    });


app.post('/create',async (req,res) => {
        const newNote = new Note({
            title: req.body.title,
            description: req.body.description

        })
        await newNote.save();
        res.json({message: 'I M READING'})
        


            
           
    });
    
// Listen to a port

app.listen(8000, () => {
    console.log('server running on localhost:8000');
    });