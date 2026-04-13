import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getPlaceholder(): string {
    return 'Users service is scaffolded and ready for contributors.';
  }
}
