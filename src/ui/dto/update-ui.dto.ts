import { PartialType } from '@nestjs/mapped-types';
import { CreateUiDto } from './create-ui.dto';

export class UpdateUiDto extends PartialType(CreateUiDto) {}
