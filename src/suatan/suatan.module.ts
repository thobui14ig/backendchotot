import { Module } from '@nestjs/common';
import { SuatanService } from './suatan.service';
import { SuatanController } from './suatan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuatAn } from 'src/entity/suatan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuatAn])],
  controllers: [SuatanController],
  providers: [SuatanService]
})
export class SuatanModule {}
