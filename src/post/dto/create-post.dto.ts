import { IsNumber, IsString } from "class-validator"

export class CreatePostDto {
  @IsString()
  content: string

  @IsNumber()
  userId: number
}
