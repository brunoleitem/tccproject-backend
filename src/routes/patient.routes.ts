import { CreatePatientController } from '@modules/patient/useCases/createPatient/createPatientController';
import { ensureAuthenticateUser } from '@middlewares/ensureAuthenticated'
import { Router } from 'express';
import { GetAllPatientsController } from '@modules/patient/useCases/getAllPatients/getAllPatientsController';
import { GetPatientController } from '@modules/patient/useCases/getPatient/getPatientController';
import { DeletePatientController } from '@modules/patient/useCases/deletePatient/deletePatientController';
import { EditPatientController } from '@modules/patient/useCases/editPatient/editPatientController';

const patientRoutes = Router();

patientRoutes.post('/create', ensureAuthenticateUser, new CreatePatientController().handle);

patientRoutes.get('/all', ensureAuthenticateUser, new GetAllPatientsController().handle)

patientRoutes.get('/:id', ensureAuthenticateUser, new GetPatientController().handle)

patientRoutes.delete('/:id', ensureAuthenticateUser, new DeletePatientController().handle);

patientRoutes.patch('/:id', ensureAuthenticateUser, new EditPatientController().handle)

export { patientRoutes };