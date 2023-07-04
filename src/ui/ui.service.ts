import { Injectable } from '@nestjs/common';
import { CreateUiDto } from './dto/create-ui.dto';
import { UpdateUiDto } from './dto/update-ui.dto';
import { Ui } from "./entities/ui.entity";

@Injectable()
export class UiService {
  private uis: Ui[] = []


  create(createUiDto: CreateUiDto) {
    this.uis.push({
      id: this.uis.length + 1,
      ...createUiDto,
    })
  }

  findAll() {
    return this.uis;
  }

  findOne(id: number) {
    return `This action returns a #${id} ui`;
  }

  update(id: number, updateUiDto: UpdateUiDto) {
    return `This action updates a #${id} ui`;
  }

  remove(id: number) {
    return `This action removes a #${id} ui`;
  }
}
