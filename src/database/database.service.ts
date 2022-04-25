import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnectableConfig } from "rxjs/internal/observable/connectable";
import { Configuration } from "src/config/config.key";
import { ConfigService } from "src/config/config.service";
import { ConnectionOptions } from "tls";
import { ConfigModule } from '../config/config.module';


export const databaseProvides = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                ssl: true,
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}']

            } as ConnectionOptions

        }
    })
]