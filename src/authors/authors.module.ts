import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorModel } from './models/author.model';

@Module({
  imports: [SequelizeModule.forFeature([AuthorModel])],   // Model shotan royhatdan otkazib qoyiladi va serviseda ishlatish uchun!
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [AuthorsService]
})
export class AuthorsModule {}
