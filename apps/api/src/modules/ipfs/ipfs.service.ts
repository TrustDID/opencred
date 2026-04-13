import { Injectable } from '@nestjs/common';

@Injectable()
export class IpfsService {
  getPlaceholder(): string {
    return 'Ipfs service is scaffolded and ready for contributors.';
  }
}
