import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiExtraModels, ApiBearerAuth } from '@nestjs/swagger'

import { ApiResult } from '../../common/decorators/api-result.decorator'
import { ResultData } from '../../common/utils/result'
import { CreateFreshDto } from './dto/create-fresh'
import { FreshKeyDto } from './dto/fresh-key'
import { FreshService } from './fresh.service'

@ApiTags('钓鱼')
@ApiExtraModels(ResultData)
@Controller('fresh')
export class FreshController {
  constructor(private readonly freshService: FreshService) {}

  @Post()
  @ApiResult()
  @ApiBearerAuth()
  async add(@Body() dto: CreateFreshDto) {
    return await this.freshService.create(dto)
  }

  @Get('/key')
  @ApiResult()
  async getKey() {
    return await this.freshService.getKey()
  }

  @Post('/key')
  @ApiResult()
  async setKey(@Body() dto: FreshKeyDto) {
    return await this.freshService.setKey(dto.key)
  }
}
