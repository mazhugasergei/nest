import { Module } from "@nestjs/common"
import { PrismaModule } from "nestjs-prisma"
import { PostController } from "./post.controller"
import { PostService } from "./post.service"

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [PrismaModule],
})
export class PostModule {}
