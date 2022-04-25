import { Module } from '@nestjs/common';
import { databaseProvides } from './database.service';

@Module({
    imports: [...databaseProvides],
    exports: [...databaseProvides]
})
export class DatabaseModule {

}
