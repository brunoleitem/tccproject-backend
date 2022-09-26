import { prisma } from '@database/prismaClient';

interface ICreatePatient {
  name: string;
  doctorId: number;
}

export class CreatePatientUseCase {
  async execute({ name, doctorId }: ICreatePatient) {
    const patientExists = await prisma.patient.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive'
        },
        doctor_id: {
          equals: doctorId,
        }
    }})

    if (patientExists) {
      throw new Error('Patient exists');
    }

    const patient = await prisma.patient.create({ 
      data: {
        name: name,
        doctor_id: doctorId,
      }
    })

    return patient;
  }
}