/*
 * @Author: yangyue yangyue@scooper.com.cn
 * @Date: 2023-05-12 18:32:36
 * @LastEditors: yangyue yangyue@scooper.com.cn
 * @LastEditTime: 2023-05-12 19:21:26
 * @FilePath: \nest\api\src\posts\posts.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatPostDto {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string;
}

@Controller('posts')
@ApiTags('默认post')
export class PostsController {
  @Get('/')
  @ApiOperation({ summary: '显示人员列表1111' })
  index() {
    return [
      {
        index: 1,
      },
      {
        index: 2,
      },
      {
        index: 3,
      },
      {
        index: 2,
      },
      {
        index: 2,
      },
      {
        index: 2,
      },
    ];
  }

  @Post('/create')
  @ApiOperation({ summary: '创建账号' })
  create(@Body() body: CreatPostDto) {
    body;
    return {
      success: true,
    };
  }

  @Get(':id')
  detial() {
    return {
      id: 1111,
      tittle: 2222,
    };
  }
}
