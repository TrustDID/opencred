import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getPlaceholder(): string {
    return 'Common service is scaffolded and ready for contributors.';
  }
}
