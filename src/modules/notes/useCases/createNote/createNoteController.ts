import { Request, Response } from 'express';

import { CreateNoteUseCase } from './createNoteUseCase';

export class CreateNoteController {
  async handle(request: Request, response: Response) {
    const { title, body} = request.body;
    const { id_user } = request;
    const { id} = request.params;
    const createNoteUseCase = new CreateNoteUseCase();

    try {
      const result = await createNoteUseCase.execute({
        doctorId: Number(id_user),
        body: body,
        patientId: Number(id),
        title: title,
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}