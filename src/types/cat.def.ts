import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

import { Uni } from './uni';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');
// import faker from 'faker';

class CatRes {
  @ApiProperty({ description: '轨迹', example: faker.name.findName() })
  trace: string;
  @ApiProperty({ description: '年龄', example: faker.name.findName() })
  age: number;
  @ApiProperty({ description: '地址', example: faker.name.findName() })
  address: string;
}

class CatReq {
  @ApiProperty({ description: '名字', example: faker.name.findName() })
  name: string;
  @ApiProperty({ description: '猫的类型', example: faker.name.findName() })
  catkind: number;
}

class DogFail {
  @ApiProperty({ description: '失败名称', example: faker.name.findName() })
  name: string;
  @ApiProperty({ description: '年龄问题', example: faker.name.findName() })
  age: number;
  @ApiProperty({ description: '原因', example: faker.name.findName() })
  reason: string;
}

export { CatReq, CatRes, DogFail };
