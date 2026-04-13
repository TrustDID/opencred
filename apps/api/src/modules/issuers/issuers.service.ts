import { Injectable } from '@nestjs/common';

@Injectable()
export class IssuersService {
  getPlaceholder(): string {
    return 'Issuers service is scaffolded and ready for contributors.';
  }
}
