import { Request, Response } from 'express';

import { DeleteNoteUseCase } from './deleteNoteUseCase';

export class DeleteNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteNoteUseCase = new DeleteNoteUseCase();

    try {
      const result = await deleteNoteUseCase.execute({
        id: Number(id)
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}