import { Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ChiTietSuatAn } from './chitietsuatan.entity';



  
@Entity({ name: 'vattu' })

export class VatTu{
    @PrimaryGeneratedColumn()
    ma_vattu?: number;
  
    @Column()
    ten_vattu?: string;

    @Column()
    gia?: number;







   

  }