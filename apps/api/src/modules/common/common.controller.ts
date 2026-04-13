import { Controller, Get } from '@nestjs/common';
import { CommonService } from './common.service';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get()
  getPlaceholder(): string {
    return 'Common module is scaffolded. Implement behavior via contributor issues.';
  }
}
