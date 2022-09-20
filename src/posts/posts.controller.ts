import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    console.log(id)
    return this.postsService.find(id);
  }

  @Post('/')
  create(@Body() body: CreatePostDto) {
    return this.postsService.create(body)
  }
}
