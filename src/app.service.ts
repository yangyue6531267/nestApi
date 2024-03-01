/*
 * @Author: yangyue yangyue@scooper.com.cn
 * @Date: 2023-05-12 17:30:48
 * @LastEditors: yangyue yangyue@scooper.com.cn
 * @LastEditTime: 2024-03-01 17:37:25
 * @FilePath: \nest\api\src\app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPeople() {
    return {
      name: '张三',
      sle: '男',
    }
  }
}
