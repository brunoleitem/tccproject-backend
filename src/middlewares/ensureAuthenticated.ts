import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token Missing',
      code: 'token.expired',
    });
  }
  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      '67c1126fc155d0aa232d2a1f09883833'
    ) as IPayload;

    request.id_user = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token',
      code: 'token.expired',
    });
  }
}