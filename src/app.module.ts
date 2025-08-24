import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
    imports: [UserModule],

})

// Implement interface dan classga voris olish!!
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware)
        .forRoutes({path: 'users', method: RequestMethod.ALL})
    }
}