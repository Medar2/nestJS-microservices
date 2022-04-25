import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.Repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])]
})
export class UserModule {}
