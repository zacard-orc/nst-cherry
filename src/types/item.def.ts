import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');
// import faker from 'faker';

class Item {
  @ApiResponseProperty({ example: faker.name.findName() })
  title: string;
  @ApiResponseProperty({ example: faker.name.findName() })
  sub_title: string;
}

class ItemList {
  @ApiResponseProperty({ example: faker.name.findName() })
  mex: string;
  @ApiResponseProperty()
  @ApiProperty({ type: [Item] })
  data: Item[];
}

class ItemListQuery {
  @ApiProperty({ description: '游标位移', example: '20' })
  offset: number;
  @ApiProperty({ description: '拉取条数', example: '30' })
  count: number;
}

export { Item, ItemList, ItemListQuery };
