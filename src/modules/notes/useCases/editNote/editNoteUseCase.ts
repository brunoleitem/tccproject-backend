import { prisma } from "@database/prismaClient";

interface IEditNote {
  id: number;
  body: string;
  title: string;
}

export class EditNoteUseCase {
  async execute ({ id, body, title}: IEditNote) {
   const note = await prisma.note.findUnique({
    where: {
      id
    }
   });

   if(!note) {
    throw new Error('Nota não existe');
   }

   const newNote = await prisma.note.update({
    where: {
      id
    },
    data: {
      title,
      body,
    }
   })

   return newNote;
  }
}