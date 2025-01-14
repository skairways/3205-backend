import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('url')
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  originalUrl: string;

  @Column({ unique: true })
  shortUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 0 })
  clickCount: number;
}
