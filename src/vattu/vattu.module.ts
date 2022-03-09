import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VatTu } from 'src/entity/vattu.entity';
import { VatTuController } from './vattu.controller';
import { VatTuService } from './vattu.service';

@Module({
  imports: [TypeOrmModule.forFeature([VatTu])],
  controllers: [VatTuController],
  providers: [VatTuService]
})
export class VatTuModule {}
