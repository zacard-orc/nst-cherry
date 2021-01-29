import { ApiResponseProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');
// import faker from 'faker';

class User {
  @ApiResponseProperty({ example: faker.name.findName() })
  name: string;
  @ApiResponseProperty({ example: faker.name.findName() })
  age: number;
  @ApiResponseProperty({ example: faker.name.findName() })
  area: string;
}

export { User };
