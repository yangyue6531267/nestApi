/*
 * @Author: yangyue yangyue@scooper.com.cn
 * @Date: 2023-05-12 17:30:48
 * @LastEditors: yangyue yangyue@scooper.com.cn
 * @LastEditTime: 2023-05-26 18:38:56
 * @FilePath: \api\src\app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('首页')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  index() {
    return {
      index: 1,
    };
  }

  @Get('home')
  getHello() {
    return this.appService.getHello();
  }

  @Get('home/:id')
  getPeople() {
    return this.appService.getPeople();
  }
}
