import { Request, Response } from 'express';

import { DeletePatientUseCase } from './deletePatientUseCase';

export class DeletePatientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deletePatientUseCase = new DeletePatientUseCase();

    try {
      const result = await deletePatientUseCase.execute({
        id: Number(id)
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}