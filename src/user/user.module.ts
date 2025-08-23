import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],     // Route'lar bilan ishlidi
  providers: [UserService],          // Logikani bajaradi
})
export class UserModule {}         // AppModule barcha fayllani royhatdan o'tkazib turuvchi fayl
