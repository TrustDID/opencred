import { Injectable } from '@nestjs/common';

@Injectable()
export class CredentialsService {
  getPlaceholder(): string {
    return 'Credentials service is scaffolded and ready for contributors.';
  }
}
