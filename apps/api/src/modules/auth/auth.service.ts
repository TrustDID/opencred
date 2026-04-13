import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getPlaceholder(): string {
    return 'Auth service is scaffolded and ready for contributors.';
  }
}
