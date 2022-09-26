import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {
  async execute(user_id: string) {
    const token = sign({}, '67c1126fc155d0aa232d2a1f09883833', {
      subject: user_id,
      expiresIn: '2d',
    });

    return token;
  }
}

export { GenerateTokenProvider };