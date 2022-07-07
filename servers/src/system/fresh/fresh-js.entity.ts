import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('sys_fresh_js')
export class FreshJsEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: string

  @ApiProperty({ description: 'key' })
  @Column({ name: 'key', type: 'varchar' })
  public key: string

  @ApiProperty({ description: 'url' })
  @Column({ name: 'url', type: 'varchar' })
  public url: string

  @ApiProperty({ description: 'name' })
  @Column({ name: 'name', type: 'varchar' })
  public name: string
}
