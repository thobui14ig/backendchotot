import { SuatAn } from 'src/entity/suatan.entity';
import { Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { VatTu } from './vattu.entity';



  
@Entity({ name: 'chitietsuatan' })

export class ChiTietSuatAn{
    @PrimaryGeneratedColumn()
    id_auto?: number;

  
    @Column()
    id_phieu?: number;


    @Column()
    ma_vattu?: string;



    @Column()
    soluong?: number;

    @Column()
    thanhtien?: number;

    @Column()
    dvt?: string;

    @ManyToOne(() => SuatAn, suatan => suatan.chititetsuatans)
    @JoinColumn({ name: 'id_phieu'})
    suatan: SuatAn;

    @OneToOne(() => VatTu)
    @JoinColumn({ name: "ma_vattu" })
    vattu: VatTu;

    
   

  }