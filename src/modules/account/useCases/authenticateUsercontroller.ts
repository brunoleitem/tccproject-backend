import { Request, Response } from 'express';

import { AuthenticateUserUseCase } from './authenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;
    try {
      const authenticateUserUseCase = new AuthenticateUserUseCase();

      const result = await authenticateUserUseCase.execute({
        name,
        password,
      });

      return response.status(200).json(result);
    } catch (err) {
      return response
        .status(400)
        .json({ Error: err });
    }
  }
}