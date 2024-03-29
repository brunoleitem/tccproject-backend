import { Request, Response } from 'express';

import { GetPatientUseCase } from './getPatientUseCase';

export class GetPatientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const getPatientUseCase = new GetPatientUseCase();

    try {
      const result = await getPatientUseCase.execute({
        patientId: Number(id)
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}