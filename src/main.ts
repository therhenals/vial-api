import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initial swagger
  const options = new DocumentBuilder()
    .setTitle('Vial API')
    .setVersion(process.env.npm_package_version)
    .addBearerAuth({
      type: 'http',
    }, 'firebase')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  // Validators
  app.useGlobalPipes(new ValidationPipe());
  // Enable cors
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
