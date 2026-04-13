import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'OpenCred API scaffold is ready. Business logic and database details are intentionally left for contributor issues.';
  }
}
