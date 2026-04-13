import { Controller, Get } from '@nestjs/common';
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Get()
  getPlaceholder(): string {
    return 'Verification module is scaffolded. Implement behavior via contributor issues.';
  }
}
