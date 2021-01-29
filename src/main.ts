import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const swgOpt = new DocumentBuilder()
    .setTitle('swg api配置标题')
    .setDescription('swg api标题描述')
    .setVersion('1.0.0')
    .addTag('配置,安全')
    .build();

  const document = SwaggerModule.createDocument(app, swgOpt);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
