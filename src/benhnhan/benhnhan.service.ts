import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BenhNhan } from 'src/entity/benhnhan.entity';



@Injectable()
export class BenhNhanService extends TypeOrmCrudService<BenhNhan> {
  constructor(@InjectRepository(BenhNhan) repo) {
      super(repo);
  } 

  // create(createSuatanDto: CreateSuatanDto) {
  //   return 'This action adds a new suatan';
  // }

  // findAll() {
  //   return `This action returns all suatan`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} suatan`;
  // }

  // update(id: number, updateSuatanDto: UpdateSuatanDto) {
  //   return `This action updates a #${id} suatan`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} suatan`;
  // }
}
