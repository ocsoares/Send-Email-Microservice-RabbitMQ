import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('email');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    await app.listen(PORT);
}

bootstrap();
