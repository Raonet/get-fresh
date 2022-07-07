import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiExtraModels, ApiBearerAuth } from '@nestjs/swagger'
import { AllowAnon } from 'src/common/decorators/allow-anon.decorator'

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
  @AllowAnon()
  async add(@Body() dto: CreateFreshDto) {
    dto.time = new Date().getTime().toString()
    console.log(new Date())
    dto.open = '1'
    dto.version = '1'
    dto.id = new Date().getTime()
    return await this.freshService.create(dto)
  }

  @Get('')
  @ApiResult()
  @AllowAnon()
  async find() {
    return await this.freshService.findAll()
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

  @Put()
  async modify(@Body() dto: CreateFreshDto) {
    return await this.freshService.update(dto)
  }

  @Get('/file')
  async getFileList() {
    return await this.freshService.fileDisplay('./public')
  }

  @Post('/js')
  async genJs() {
    return await this.freshService.getJs()
  }
}
