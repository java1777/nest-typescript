import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';

@Module({
    imports: [UserModule],          // Importsda xamma fayla royhatdan otkazib qoyiladi
})
export class AppModule {}