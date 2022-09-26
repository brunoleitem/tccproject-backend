import { CreatePatientController } from '@modules/patient/useCases/createPatient/createPatientController';
import { ensureAuthenticateUser } from '@middlewares/ensureAuthenticated'
import { Router } from 'express';
import { GetAllPatientsController } from '@modules/patient/useCases/getAllPatients/getAllPatientsController';
import { GetPatientController } from '@modules/patient/useCases/getPatient/getPatientController';

const patientRoutes = Router();

patientRoutes.post('/create', ensureAuthenticateUser, new CreatePatientController().handle);

patientRoutes.get('/all', ensureAuthenticateUser, new GetAllPatientsController().handle)

patientRoutes.get('/', ensureAuthenticateUser, new GetPatientController().handle)

export { patientRoutes };