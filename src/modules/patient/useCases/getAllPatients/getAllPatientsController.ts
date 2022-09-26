import { Request, Response } from 'express';

import { GetAllPatientsUseCase } from './getAllPatientsUseCase';

export class GetAllPatientsController {
  async handle(request: Request, response: Response) {
    const { id_user } = request ;
    const getAllPatientsUseCase = new GetAllPatientsUseCase();

    try {
      const result = await getAllPatientsUseCase.execute({
        doctorId: Number(id_user)
      });

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({ Error: err });
    }
  }
}