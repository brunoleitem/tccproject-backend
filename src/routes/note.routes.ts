import { ensureAuthenticateUser } from '@middlewares/ensureAuthenticated'
import { CreateNoteController } from '@modules/notes/useCases/createNote/createNoteController';
import { DeleteNoteController } from '@modules/notes/useCases/deleteNote/deleteNoteController';
import { EditNoteController } from '@modules/notes/useCases/editNote/editNoteController';
import { Router } from 'express';

const noteRoutes = Router();

noteRoutes.post('/create/:id', ensureAuthenticateUser, new CreateNoteController().handle);

noteRoutes.delete('/delete/:id', ensureAuthenticateUser, new DeleteNoteController().handle)

noteRoutes.put('/edit/:id', ensureAuthenticateUser, new EditNoteController().handle)

export { noteRoutes };