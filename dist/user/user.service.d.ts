import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { ISuccessResponse } from 'src/interfaces/success-response';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<ISuccessResponse>;
    findAll(): Promise<ISuccessResponse>;
    findOne(id: string): Promise<ISuccessResponse>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<ISuccessResponse>;
    remove(id: string): Promise<ISuccessResponse>;
}
