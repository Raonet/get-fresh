import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsIn, IsNumber, IsString, Min, IsNotEmpty, Length, IsNumberString, IsBoolean } from 'class-validator'

export class FreshKeyDto {
  @ApiProperty({ description: 'ip' })
  readonly id: string

  @ApiProperty({ description: 'key' })
  @IsString()
  readonly key: string
}
