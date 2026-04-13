import { Controller, Get } from '@nestjs/common';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Get()
  getPlaceholder(): string {
    return 'Credentials module is scaffolded. Implement behavior via contributor issues.';
  }
}
