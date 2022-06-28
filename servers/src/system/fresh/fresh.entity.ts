import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('sys_fresh')
export class FreshEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number

  @ApiProperty({ description: 'url' })
  @Column({ name: 'url', type: 'varchar' })
  public url: string

  @ApiProperty({ description: 'ip' })
  @Column({ type: 'varchar', length: 30, comment: 'ip' })
  public ip: string

  @ApiProperty({ description: '时间' })
  @Column({ type: 'varchar', comment: '时间' })
  public time: string

  @ApiProperty({ description: '城市' })
  @Column({ type: 'varchar', comment: '城市' })
  public city: string

  @ApiProperty({ description: '设备信息' })
  @Column({ type: 'varchar', comment: '设备信息' })
  public navigator: string

  @ApiProperty({ description: '开关' })
  @Column({ type: 'varchar', comment: '开关' })
  public open: string

  @ApiProperty({ description: 'js版本' })
  @Column({ type: 'varchar', comment: 'js版本' })
  public version: string

  @ApiProperty({ description: 'js版本' })
  @Column({ type: 'varchar', comment: 'js版本' })
  public click: string
}
