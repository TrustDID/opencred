import { Module } from '@nestjs/common';
import { IssuersController } from './issuers.controller';
import { IssuersService } from './issuers.service';

@Module({
  controllers: [IssuersController],
  providers: [IssuersService],
})
export class IssuersModule {}
