import * as mongoose from 'mongoose';
export declare class Post extends mongoose.Document {
    title: string;
    description: string;
    userId: mongoose.Schema.Types.ObjectId;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post, any, {}> & Post & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, mongoose.FlatRecord<Post>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Post> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
