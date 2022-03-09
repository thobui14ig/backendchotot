import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VatTuService } from './vattu.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { VatTu } from 'src/entity/vattu.entity';
@Crud({
  model: {
    type: VatTu,
  },

})
@Controller('vattu')
export class VatTuController implements CrudController<VatTu>{
  constructor(public service: VatTuService) {}

  // @Post()
  // create(@Body() createSuatanDto: CreateSuatanDto) {
  //   return this.suatanService.create(createSuatanDto);
  // }

  // @Get()
  // findAll() {
  //   return this.suatanService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.suatanService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSuatanDto: UpdateSuatanDto) {
  //   return this.suatanService.update(+id, updateSuatanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.suatanService.remove(+id);
  // }
}
