import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { IssuersModule } from './modules/issuers/issuers.module';
import { CredentialsModule } from './modules/credentials/credentials.module';
import { VerificationModule } from './modules/verification/verification.module';
import { BlockchainModule } from './modules/blockchain/blockchain.module';
import { IpfsModule } from './modules/ipfs/ipfs.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    IssuersModule,
    CredentialsModule,
    VerificationModule,
    BlockchainModule,
    IpfsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
