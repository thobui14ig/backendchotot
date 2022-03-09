import { Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ChiTietSuatAn } from './chitietsuatan.entity';



  
@Entity({ name: 'suatan' })

export class SuatAn{
    @PrimaryGeneratedColumn()
    id_phieu?: number;
  
    @Column()
    ngay_ct?: Date;

    @Column()
    buoi?: number

    @Column()
    id_luotkham?: number

    @Column()
    loai?: number

    @Column()
    dien_giai?: string

    @OneToMany(() => ChiTietSuatAn, chititetsuatan => chititetsuatan.suatan)
    chititetsuatans: ChiTietSuatAn[];


   

  }