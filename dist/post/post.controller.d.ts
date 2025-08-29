import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("../interfaces/success-response").ISuccessResponse>;
    findAll(): Promise<import("../interfaces/success-response").ISuccessResponse>;
    findOne(id: string): Promise<import("../interfaces/success-response").ISuccessResponse>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("../interfaces/success-response").ISuccessResponse>;
    remove(id: string): Promise<import("../interfaces/success-response").ISuccessResponse>;
}
