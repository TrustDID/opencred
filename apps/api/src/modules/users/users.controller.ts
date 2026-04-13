import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getPlaceholder(): string {
    return 'Users module is scaffolded. Implement behavior via contributor issues.';
  }
}
