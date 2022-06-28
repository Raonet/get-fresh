import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsIn, IsNumber, IsString, Min, IsNotEmpty, Length, IsNumberString, IsBoolean } from 'class-validator'

export class CreateFreshDto {
  @ApiProperty({ description: 'ip' })
  id: number

  @ApiProperty({ description: 'url' })
  @IsString()
  readonly url: string

  @ApiProperty({ description: 'ip地址' })
  readonly ip: string

  @ApiProperty({})
  time: string

  @ApiProperty({ description: '开关', required: false })
  open: string

  @ApiProperty({ description: 'js版本' })
  version: string

  @ApiProperty({ description: '是否点击' })
  readonly click: string

  @ApiProperty({ description: '是否点击' })
  readonly city: string

  @ApiProperty({ description: '是否点击' })
  readonly navigator: string
}
