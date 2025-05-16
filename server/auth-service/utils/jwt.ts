import jwt from 'jsonwebtoken';

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, "2AxA2TYFTBv9d2m84EPM" as string, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, "2AxA2TYFTBv9d2m84EPM" as string);
};
