import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UiService } from './ui.service';
import { CreateUiDto } from './dto/create-ui.dto';
import { UpdateUiDto } from './dto/update-ui.dto';

@Controller('ui')
export class UiController {
  constructor(private readonly uiService: UiService) {}

  @Post()
  create(@Body() createUiDto: CreateUiDto) {
    return this.uiService.create(createUiDto);
  }

  @Get()
  findAll() {
    return this.uiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUiDto: UpdateUiDto) {
    return this.uiService.update(+id, updateUiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uiService.remove(+id);
  }
}
