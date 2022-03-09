import { Module } from '@nestjs/common';
import { BenhNhanController } from './benhnhan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenhNhanService } from './benhnhan.service';
import { BenhNhan } from 'src/entity/benhnhan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BenhNhan])],
  controllers: [BenhNhanController],
  providers: [BenhNhanService]
})
export class BenhNhanModule {}
