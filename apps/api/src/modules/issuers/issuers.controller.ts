import { Controller, Get } from '@nestjs/common';
import { IssuersService } from './issuers.service';

@Controller('issuers')
export class IssuersController {
  constructor(private readonly issuersService: IssuersService) {}

  @Get()
  getPlaceholder(): string {
    return 'Issuers module is scaffolded. Implement behavior via contributor issues.';
  }
}
