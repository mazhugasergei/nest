import { IsOptional, IsString } from "class-validator"

export class CreateUserDto {
  @IsString()
  username: string

  @IsString()
  password: string

  @IsString()
  email: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  role: string
}
