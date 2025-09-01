"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const PORT = Number(process.env.PORT);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }));
    await app.listen(PORT, () => console.log('server running on port', PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map