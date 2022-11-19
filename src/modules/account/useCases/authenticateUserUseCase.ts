import { prisma } from '@database/prismaClient';

import { GenerateTokenProvider } from '@provider/GenerateTokenProvider';

interface IAuthenticateUser {
  user: string;
  password: string;
}

interface IResponse {
  token: string;
  id: number;
  name: string;
  avatar: string | null;
}

export class AuthenticateUserUseCase {
  async execute({ user, password }: IAuthenticateUser) {
    const doctor = await prisma.doctor.findFirst({
      where: {
        name: {
          equals: user
        }
      }
    });
    if (!doctor) {
      throw new Error('Username or password invalid');
    }
    const passwordMatch = doctor.password === password;

    if (!passwordMatch) {
      throw new Error('Username or password invalid');
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(doctor.id.toString());

    const tokenReturn: IResponse = {
      id: doctor.id,
      name: doctor.name,
      avatar: doctor.avatar,
      token,
    };
    
    return tokenReturn;
  }
}