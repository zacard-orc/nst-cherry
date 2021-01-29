import { ApiProperty } from '@nestjs/swagger';

type UniHeader = { sessionId?: string };

class Uni<T> {
  @ApiProperty({})
  RES_BODY: T;
  @ApiProperty({})
  RES_HEAD: UniHeader;
}

export { Uni, UniHeader };
