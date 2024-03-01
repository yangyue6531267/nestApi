/*
 * @Author: yangyue yangyue@scooper.com.cn
 * @Date: 2023-05-12 17:30:48
 * @LastEditors: yangyue yangyue@scooper.com.cn
 * @LastEditTime: 2024-03-01 17:37:06
 * @FilePath: \nest\api\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('nestjs Api')
    .setDescription('nestjs项目')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(1081);
}
bootstrap();
