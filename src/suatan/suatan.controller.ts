import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuatanService } from './suatan.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { SuatAn } from 'src/entity/suatan.entity';
@Crud({
  model: {
    type: SuatAn,
  },
  query:{
    // limit: 1,
    alwaysPaginate: true, // phân trang,
    // allow: ['title'],
    // persist: ["create_at"],
    // exclude: ["comments", "body"], //loại bỏ
    join:{
      chititetsuatans: {
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
@Controller('suatan')
export class SuatanController implements CrudController<SuatAn>{
  constructor(public service: SuatanService) {}

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
