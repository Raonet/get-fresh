import { ApiProperty } from '@nestjs/swagger'

export class FreshOpenDto {
  @ApiProperty({ description: 'ip' })
  id: number

  @ApiProperty({ description: 'url' })
  readonly open: string
}
