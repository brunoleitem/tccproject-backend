import { prisma } from "@database/prismaClient";

interface IDeleteNote {
  id: number;
}

export class DeleteNoteUseCase {
  async execute ({ id}: IDeleteNote) {
   const note = await prisma.note.findUnique({
    where: {
      id
    }
   });

   if(!note) {
    throw new Error('Nota não existe');
   }

   await prisma.note.delete({
    where: {
      id
    }
   })

   return;
  }
}