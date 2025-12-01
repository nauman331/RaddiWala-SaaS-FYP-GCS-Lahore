import jwt from 'jsonwebtoken';

export interface JwtPayload {
  userId: string;
  email: string;
}

export const signToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY || "default_secret", { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any });
}

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY || "default_secret") as JwtPayload;
  } catch (error) {
    return null;
  }
}