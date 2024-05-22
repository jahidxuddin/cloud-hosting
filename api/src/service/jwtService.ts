import * as jwt from "jsonwebtoken";

interface UserDetails {
  username: string;
}

export default class JwtService {
  private readonly JWT_SECRET: string;

  constructor() {
    this.JWT_SECRET = process.env.JWT_SECRET;
  }

  extractUsername(token: string): string {
    return this.extractClaim(token, (claims) => claims.sub as string);
  }

  isValid(token: string, user: UserDetails): boolean {
    const username = this.extractUsername(token);
    return username === user.username && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    return this.extractExpiration(token).getTime() < new Date().getTime();
  }

  private extractExpiration(token: string): Date {
    return new Date(
      this.extractClaim(token, (claims) => (claims.exp as number) * 1000)
    );
  }

  private extractClaim<T>(
    token: string,
    resolver: (claims: jwt.JwtPayload) => T
  ): T {
    const claims = this.extractAllClaims(token);
    return resolver(claims);
  }

  private extractAllClaims(token: string): jwt.JwtPayload {
    return jwt.verify(token, this.JWT_SECRET) as jwt.JwtPayload;
  }

  generateToken(email: string): string {
    return jwt.sign(
      {
        sub: email,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      },
      this.JWT_SECRET
    );
  }
}
