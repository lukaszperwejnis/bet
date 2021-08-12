import * as jwt from 'jsonwebtoken';
import { MissingTokenError } from '../errors/MissingTokenError';
import config from '../config';
import {
  DataStoredInUserToken,
  DataStoredInSigninToken,
} from '../interfaces/TokenData';
import { TokenExpiredError } from '../errors';

export class TokenService {
  private verifyToken(token: string) {
    if (!token) {
      throw new MissingTokenError();
    }

    return new Promise((resolve, reject) => {
      jwt.verify(token, config.secrets.jwt, (err, payload) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(payload);
      });
    });
  }

  verifySigninToken(token: string): Promise<unknown> {
    return this.verifyToken(token);
  }

  verifyAccessToken(token: string): Promise<unknown> {
    return this.verifyToken(token);
  }

  async refreshAccessTokenByRefreshToken(
    token: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: any = await this.verifyToken(token);
    if (!payload) {
      throw new TokenExpiredError();
    }

    return {
      accessToken: this.createRefreshToken(payload._id),
      refreshToken: token,
    };
  }

  verifyMailInvitationToken(token: string): Promise<unknown> {
    return this.verifyToken(token);
  }

  verifyResetPasswordToken(token: string): Promise<unknown> {
    return this.verifyToken(token);
  }

  createAccessToken(userId: string): string {
    const dataStoredInToken: DataStoredInSigninToken = {
      _id: userId,
    };
    const expiresIn = config.secrets.jwtAccessExp;

    return jwt.sign(dataStoredInToken, config.secrets.jwt, { expiresIn });
  }

  createRefreshToken(userId: string): string {
    const dataStoredInToken: DataStoredInSigninToken = {
      _id: userId,
    };
    const expiresIn = config.secrets.jwtRefreshExp;

    return jwt.sign(dataStoredInToken, config.secrets.jwt, { expiresIn });
  }

  createInvitationToken(email: string): string {
    const dataStoredInToken: DataStoredInUserToken = { email };
    const expiresIn = config.secrets.jwtInvitationExp;
    return jwt.sign(dataStoredInToken, config.secrets.jwt, { expiresIn });
  }

  createResetPasswordToken(email: string): string {
    const dataStoredInToken: DataStoredInUserToken = { email };
    const expiresIn = config.secrets.jwtResetExp;
    return jwt.sign(dataStoredInToken, config.secrets.jwt, { expiresIn });
  }
}
