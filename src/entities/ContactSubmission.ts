import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

@Entity()
export class ContactSubmission {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  @Length(2, 100)
  name: string

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Column('text')
  @IsNotEmpty()
  @Length(10, 1000)
  message: string

  @CreateDateColumn()
  createdAt: Date
}