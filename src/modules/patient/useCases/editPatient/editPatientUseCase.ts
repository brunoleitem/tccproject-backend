import { prisma } from '@database/prismaClient';

interface IEditPatient {
  id: number;
  name: string;
}

export class EditPatientUseCase {
  async execute({ id, name }: IEditPatient) {
   const patientExists = await prisma.patient.findUnique({
    where: {
      id
    }
   })

    if (!patientExists) {
      throw new Error('Paciente não existe');
    }

    const patient = await prisma.patient.update({
      where: {
        id
      },
      data: {
        name: name
      },
      include: {
        Note: true
      }
    })

    return patient;
  }
}