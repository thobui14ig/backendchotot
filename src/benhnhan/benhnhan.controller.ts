import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BenhNhan } from 'src/entity/benhnhan.entity';
import { BenhNhanService } from './benhnhan.service';
@Crud({
  model: {
    type: BenhNhan,
  },
  query:{
    // limit: 1,
    alwaysPaginate: true, // phân trang,
    // allow: ['title'],
    // persist: ["create_at"],
    // exclude: ["comments", "body"], //loại bỏ
    join:{
      thongtinluotkhams: {
        // persist: ['body'],
        // allow: ["body", "post_id"],
        eager: true,
     
        // select: false,
        

      },

      
      // 'comments.user': {
      //   eager: true
      // }
    },
    
  }
})
@Controller('benhnhan')
export class BenhNhanController implements CrudController<BenhNhan>{
  constructor(public service: BenhNhanService) {}

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
