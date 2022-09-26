import { prisma } from "@database/prismaClient";

interface IGetPatient {
  patientId: number;
}

export class GetPatientUseCase {
  async execute({ patientId }: IGetPatient ) {
    const patient = await prisma.patient.findUnique({ 
      where: {
        id: patientId
      },
      include: {
        Note: true
      }

    })

    if(!patient) {
      throw new Error("Patient not found")
    }

    return patient
  }
}