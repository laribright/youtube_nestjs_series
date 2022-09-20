import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  findAll() {
    return [{ id: 1, post: 'First post' }];
  }

  find(id: string) {
    return { id: 1, post: 'First post' };
  }

  create(post: CreatePostDto) {
    return { heading: post.heading, description: post.description };
  }
}
