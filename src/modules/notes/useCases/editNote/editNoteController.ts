import { Request, Response } from 'express';

import { EditNoteUseCase } from './editNoteUseCase';

export class EditNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, body } = request.body;

    const editNoteUseCase = new EditNoteUseCase();

    try {
      const result = await editNoteUseCase.execute({
        id: Number(id),
        title,
        body
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}