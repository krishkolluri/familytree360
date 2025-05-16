import jwt from 'jsonwebtoken';

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, "your secret here from wallet or env file" as string, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, "your secret here from wallet or env file" as string);
};
