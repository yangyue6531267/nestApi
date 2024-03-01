/*
 * @Author: yangyue yangyue@scooper.com.cn
 * @Date: 2023-05-12 18:31:48
 * @LastEditors: yangyue yangyue@scooper.com.cn
 * @LastEditTime: 2023-05-12 18:37:17
 * @FilePath: \nest\api\src\posts\posts.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
})
export class PostsModule {}
