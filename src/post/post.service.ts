import { Injectable } from "@nestjs/common"
import { PrismaService } from "nestjs-prisma"
import { CreatePostDto } from "./dto/create-post.dto"
import { UpdatePostDto } from "./dto/update-post.dto"

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto })
  }

  findAll() {
    return this.prisma.post.findMany()
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    })
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } })
  }
}
