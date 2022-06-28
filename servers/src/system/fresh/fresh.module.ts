import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FreshService } from './fresh.service'
import { FreshController } from './fresh.controller'
import { FreshEntity } from './fresh.entity'
import { FreshKeyEntity } from './key.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FreshEntity, FreshKeyEntity])],
  providers: [FreshService],
  controllers: [FreshController],
})
export class FreshModule {}
