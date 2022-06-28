import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FreshService } from './fresh.service'
import { FreshController } from './fresh.controller'
import { FreshEntity } from './fresh.entity'
import { FreshKeyEntity } from './key.entity'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [TypeOrmModule.forFeature([FreshEntity, FreshKeyEntity]), HttpModule],
  providers: [FreshService],
  controllers: [FreshController],
})
export class FreshModule {}
