import { AuthenticateUserController } from '@modules/account/useCases/authenticateUsercontroller';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/', new AuthenticateUserController().handle);


export { authRoutes };