import { Injectable } from '@nestjs/common'
import { getManager, Repository, In } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToInstance } from 'class-transformer'

import { ResultData } from '../../common/utils/result'
import { AppHttpCode } from '../../common/enums/code.enum'
import { CreateFreshDto } from './dto/create-fresh'
import { FreshEntity } from './fresh.entity'
import { FreshKeyEntity } from './key.entity'

@Injectable()
export class FreshService {
  constructor(
    @InjectRepository(FreshEntity)
    private readonly freshRepo: Repository<FreshEntity>,
    @InjectRepository(FreshKeyEntity)
    private readonly freshKeyRepo: Repository<FreshKeyEntity>,
  ) {}

  async create(dto: CreateFreshDto): Promise<ResultData> {
    const fresh = await getManager().transaction(async (transactionalEntityManager) => {
      const fresh = await transactionalEntityManager.save<FreshEntity>(plainToInstance(FreshEntity, dto))
      await transactionalEntityManager.save<FreshEntity>(dto)
      return fresh
    })
    if (!fresh) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '条目新增失败，请稍后重试')
    return ResultData.ok()
  }

  async getKey() {
    const list = await this.freshKeyRepo.find()
    return list
  }

  async setKey(key: string) {
    const fresh = await getManager().transaction(async (transactionalEntityManager) => {
      const result = await transactionalEntityManager.update<FreshKeyEntity>(FreshKeyEntity, '1', plainToInstance(FreshKeyEntity, { id: '1', key: key }))
      return result
    })
    if (!fresh) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '当前角色更新失败，请稍后尝试')
    return ResultData.ok()
  }
}
