
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne } from "typeorm";
import { ThongTinLuotKham } from "./thongtinluotkham.entity";


@Entity({ name: 'benhnhan' })
export class BenhNhan{
    @PrimaryGeneratedColumn() 
    id_benhnhan: number;

    @Column()
    ten: string;
     
    @Column()
    tuoi: string;

    @OneToMany(() => ThongTinLuotKham, thongtinluotkham => thongtinluotkham.benhnhan)
    thongtinluotkhams: ThongTinLuotKham[];



}