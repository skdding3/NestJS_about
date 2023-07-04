import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUiDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly button: string;

  @IsOptional()
  @IsString()
  readonly count: number[];

}
