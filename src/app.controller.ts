import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Body,
  Response,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiTags, //tag
  ApiParam, // url规则表达式里的变量
  ApiQuery, // url里的query
  ApiHeader, // 统一头信息
  ApiResponse,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

import { Item, ItemList } from './types/item.def';
import { CatReq, CatRes, DogFail } from './types/cat.def';
import { User } from './types/user.def';
import { Uni, UniHeader } from './types/uni';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request): string {
    // console.log(request)
    return AppService.getHello();
  }

  @Post('/asdf')
  @ApiHeader({
    name: 'site',
    required: false,
    description: '站点信息',
  })
  @ApiOkResponse({ type: CatRes })
  @ApiInternalServerErrorResponse({ type: DogFail })
  sow(@Body() cat: CatReq): CatRes | DogFail {
    const res: DogFail = {
      name: '500fail',
      age: 300,
      reason: 'affff',
    };

    return res;
  }

  @Post('/nice')
  @ApiHeader({
    name: 'site',
    required: false,
    description: '站点信息',
  })
  @ApiOkResponse({ type: CatRes })
  @ApiInternalServerErrorResponse({ type: DogFail })
  nice(@Body() cat: CatReq): Uni<CatRes> {
    const catres: CatRes = {
      trace: '2000llsl--swllwororwr',
      age: 300,
      address: 'woowerlljljasd',
    };

    const cathd: UniHeader = {
      sessionId: 'sllls-wooo-sllsdfs',
    };

    const res: Uni<CatRes> = {
      RES_BODY: catres,
      RES_HEAD: cathd,
    };

    return res;
  }

  @ApiQuery({
    name: 'role',
    description: '这是需要传递的参数',
  })
  @ApiHeader({
    name: 'authoriation',
    required: false,
    description: '本次请求请带上token',
  })
  // @ApiTags('bbb')
  @ApiResponse({ status: 401, description: '权限不足' })
  @Get('/get/item')
  getUser(): ItemList {
    const item1: Item = {
      title: '洗发水',
      sub_title: '洗发水500ml',
    };
    const item2: Item = {
      title: '乐高',
      sub_title: '乐高火车头',
    };
    const itemlist: ItemList = {
      mex: 'rule333',
      data: [item1, item2],
    };
    return itemlist;
  }
}
