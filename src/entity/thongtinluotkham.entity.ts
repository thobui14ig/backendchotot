import { Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { BenhNhan } from './benhnhan.entity';
import { ChiTietSuatAn } from './chitietsuatan.entity';



  
@Entity({ name: 'thongtinluotkham' })

export class ThongTinLuotKham{
    @PrimaryGeneratedColumn()
    id?: number;
  


    @Column()
    id_luotkham?: number


    @ManyToOne(() => BenhNhan, benhnhan => benhnhan.thongtinluotkhams)
    @JoinColumn({ name: "id_benhnhan" })  
    benhnhan: BenhNhan;


   

  }