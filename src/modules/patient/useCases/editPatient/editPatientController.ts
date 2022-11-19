import { Request, Response } from 'express';

import { EditPatientUseCase } from './editPatientUseCase';

export class EditPatientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body
    const editPatientUseCase = new EditPatientUseCase();

    try {
      const result = await editPatientUseCase.execute({
        id: Number(id),
        name
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}