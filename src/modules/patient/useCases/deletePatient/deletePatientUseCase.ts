import { prisma } from '@database/prismaClient';

interface IDeletePatient {
  id: number;
}

export class DeletePatientUseCase {
  async execute({ id }: IDeletePatient) {
   const patientExists = await prisma.patient.findUnique({
    where: {
      id
    }
   })

    if (!patientExists) {
      throw new Error('Paciente não existe');
    }

    await prisma.note.deleteMany({
      where: {
patient_id: id
      }
    })

    const patient = await prisma.patient.delete({
      where: {
        id
      },
      include: {
        Note: true        
      }
    })

    return patient;
  }
}