import { Router } from "express";
import { create,patching, deleteShit,getNotes, getSingleNote} from "../controllers/note";


const noteRouter = Router()

noteRouter.post('/create', create);
noteRouter.patch('/:noteId', patching);
noteRouter.delete('/:noteId', deleteShit);
noteRouter.get('/', getNotes);
noteRouter.get('/:noteId', getSingleNote);

export default noteRouter;