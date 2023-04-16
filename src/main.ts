import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('email');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Send Email Microservice')
        .setDescription(
            'Um microsserviço de enviar email desenvolvido com sistema de mensageria, usando a ferramenta RabbitMQ',
        )
        .setVersion('1.0')
        .addTag('send-email')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);

    const server = app.getHttpAdapter();

    server.get('/', (req: Request, res: Response) => {
        res.redirect('/docs');
    });

    await app.listen(PORT);
}

bootstrap();
