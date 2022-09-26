import { ensureAuthenticateUser } from '@middlewares/ensureAuthenticated'
import { CreateNoteController } from '@modules/notes/useCases/createNote/createNoteController';
import { Router } from 'express';

const noteRoutes = Router();

noteRoutes.post('/create', ensureAuthenticateUser, new CreateNoteController().handle);


export { noteRoutes };