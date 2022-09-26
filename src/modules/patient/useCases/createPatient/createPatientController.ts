import { Request, Response } from 'express';

import { CreatePatientUseCase } from './createPatientUseCase';

export class CreatePatientController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const { id_user } = request;
    try {
      const createPatientUseCase = new CreatePatientUseCase();
      const result = await createPatientUseCase.execute({
        name,
        doctorId: Number(id_user),
      });

      return response.status(200).json(result);
    } catch (err) {
      return response
        .status(400)
        .json({ "Error": err });
    }
  }
}