import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('sys_fresh_key')
export class FreshKeyEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: string

  @ApiProperty({ description: 'key' })
  @Column({ name: 'key', type: 'varchar' })
  public key: string
}
