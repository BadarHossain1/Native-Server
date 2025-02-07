import { Router } from "express";
import { create,patching, deleteShit,getNotes, getSingleNote} from "../controllers/note";


const router = Router()

router.post('/create', create);
router.patch('/:noteId', patching);
router.delete('/:noteId', deleteShit);
router.get('/', getNotes);
router.get('/:noteId', getSingleNote);

export default router;