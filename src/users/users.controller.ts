import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { UserDto } from './dtos/users.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDto })
  async create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.usersService.create(user);
  }
}
