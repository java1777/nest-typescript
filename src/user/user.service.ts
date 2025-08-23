import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUser } from "./entity/user.entity"
import { v4 } from 'uuid'

@Injectable()     //Ozidan tegidiga classni servicligini va export bovotkanini va export bogandan kegn boshqa bir joydan royhatdan otqazish kereligini bildiradi
export class UserService {
  private users: IUser[] = [];

  async create(CreateUserDto: CreateUserDto) {
    const newUser = {id: v4(), ...CreateUserDto }
    this.users.push(newUser);
    return {
      statusCode: 201,
      message: 'success',
      data: newUser
    }
  }

  findAll() {
    return {
      statusCode: 200,
      message: 'success',
      data: this.users
    }
  }

  findOne(id: string) {
    const result = this.users.find((user: IUser) => user.id == id)
    if (!result) {
      throw new NotFoundException()
    }
    return{
      statusCode: 200,
      message: 'success',
      data: result
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id == id)
    if (index == -1) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND)
    }
    this.users[index] = {id, ...updateUserDto}
    console.log(this.users[index]);
    
    return {
      statusCode: 200,
      message: 'success',
      data: this.users[index]
    }
  }

  remove(id: string) {
    const index = this.users.findIndex(user => user.id == id)
    if (index) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND)
    }
    if (index== -1) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND)
    }
    this.users.splice(index, 1)
    return{
      statusCode: 200,
      message: 'success',
      data: {}
    }
  }
}