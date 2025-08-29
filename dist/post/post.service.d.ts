import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { ISuccessResponse } from 'src/interfaces/success-response';
import { UserService } from 'src/user/user.service';
export declare class PostService {
    private readonly postModel;
    private readonly userService;
    constructor(postModel: Model<Post>, userService: UserService);
    create(createPostDto: CreatePostDto): Promise<ISuccessResponse>;
    findAll(): Promise<ISuccessResponse>;
    findOne(id: string): Promise<ISuccessResponse>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<ISuccessResponse>;
    remove(id: string): Promise<ISuccessResponse>;
}
