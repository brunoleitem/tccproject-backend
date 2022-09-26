import { prisma } from '@database/prismaClient';

interface IGetAllPatients {
  doctorId: number
}

export class GetAllPatientsUseCase {
  async execute({ doctorId }: IGetAllPatients) {
    const users = await prisma.patient.findMany({
      where: {
        doctor_id: doctorId
      }
    })

    return users;
  }
}