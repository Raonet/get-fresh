import { ApiProperty } from '@nestjs/swagger'

export class FreshJsDto {
  @ApiProperty({ description: 'ip' })
  id: number

  @ApiProperty({ description: 'url' })
  readonly url: string

  @ApiProperty({ description: 'key' })
  readonly key: string

  @ApiProperty({ description: 'name' })
  readonly name: string
}
