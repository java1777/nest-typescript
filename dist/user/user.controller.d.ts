import { UserService } from './user.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../interfaces/success-response").ISuccessResponse>;
    findAll(): Promise<import("../interfaces/success-response").ISuccessResponse>;
    findOne(id: string): Promise<import("../interfaces/success-response").ISuccessResponse>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../interfaces/success-response").ISuccessResponse>;
    remove(id: string): Promise<import("../interfaces/success-response").ISuccessResponse>;
}
