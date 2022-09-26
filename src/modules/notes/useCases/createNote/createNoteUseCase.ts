import { prisma } from "@database/prismaClient";

interface ICreateNote {
  patientId: number,
  doctorId: number,
  title: string;
  body: string
}

export class CreateNoteUseCase {
  async execute ({ title, body, doctorId, patientId}: ICreateNote) {
    const patientExists = await prisma.patient.findUnique({ 
      where: {
        id: patientId
      }
    })

    if(!patientExists) {
      throw new Error('Patient doesnt exists')
    }
    
    const isDoctorPacient = await prisma.patient.findFirst({
      where: {
        id: patientId,
        doctor_id: {
          equals: doctorId
        }
      }
    })

    if(!isDoctorPacient) {
      throw new Error('Patient doctor is wrong')
    }

    const note = await prisma.note.create({
      data: {
        body: body,
        title: title,
        doctor_id: doctorId,
        patient_id: patientId
      }
    })
    return note;
  }
}