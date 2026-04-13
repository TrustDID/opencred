import { Injectable } from '@nestjs/common';

@Injectable()
export class VerificationService {
  getPlaceholder(): string {
    return 'Verification service is scaffolded and ready for contributors.';
  }
}
