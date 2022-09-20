import { IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(5, 15)
  heading: string;

  @IsString()
  description: string;
}
