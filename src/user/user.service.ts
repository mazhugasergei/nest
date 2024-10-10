import { Injectable } from "@nestjs/common"
import { PrismaService } from "nestjs-prisma"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto
    const userExists = await this.prisma.user.findUnique({ where: { username } })
    if (userExists) throw new Error("Username is taken")
    return this.prisma.user.create({ data: createUserDto })
  }

  findAll() {
    return this.prisma.user.findMany({
      include: { posts: true },
    })
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { username } = updateUserDto
    const userExists = await this.prisma.user.findUnique({ where: { username } })
    if (userExists && userExists.id !== id) throw new Error("Username is taken")
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
