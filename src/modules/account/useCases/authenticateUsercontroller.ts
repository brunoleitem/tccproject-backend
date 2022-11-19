import { Request, Response } from 'express';

import { AuthenticateUserUseCase } from './authenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { user, password } = request.body;
    try {
      const authenticateUserUseCase = new AuthenticateUserUseCase();

      const result = await authenticateUserUseCase.execute({
        user,
        password,
      });

      return response.status(200).json(result);
    } catch (err) {
      return response
        .status(400)
        .json({ Error: 'Usuário ou senha inválidos' });
    }
  }
}