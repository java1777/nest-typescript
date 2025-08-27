import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthorsModule } from "./authors/authors.module";
import { AuthorModel } from "./authors/models/author.model";
import { BooksModule } from "./books/books.module";
import { BookModel } from "./books/models/book.model";

@Module({
  imports: [
    ConfigModule.forRoot({    // env faylani saqlidi
      envFilePath:'.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',    // qaysi db turini yozish kere
      host: String(process.env.DB_HOST),
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USER),
      password: String(process.env.DB_PASS),
      database: String(process.env.DB_NAME),
      logging: false,         // terminalda chiqarib turishini xoxlamaganim uchun false qildim!
      synchronize: true,      // sinxron ishlashi uchun true qildim
      autoLoadModels: true,   // Modelani avtomatik tanishi uchun
      models: [AuthorModel, BookModel], // DBda table ochiberadi va Modelani ishlab turishi uchun shotga chaqiriladi!
    }),
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule{}