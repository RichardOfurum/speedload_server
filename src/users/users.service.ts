import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from 'src/auth/dto/LoginDto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<User>) {

  }

  async findByLogin(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new HttpException('Invalid creadentials', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();

    return this.sanitizeUser(createdUser)
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
  }
}
