import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockchainService {
  getPlaceholder(): string {
    return 'Blockchain service is scaffolded and ready for contributors.';
  }
}
