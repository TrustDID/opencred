import { Controller, Get } from '@nestjs/common';
import { IpfsService } from './ipfs.service';

@Controller('ipfs')
export class IpfsController {
  constructor(private readonly ipfsService: IpfsService) {}

  @Get()
  getPlaceholder(): string {
    return 'Ipfs module is scaffolded. Implement behavior via contributor issues.';
  }
}
