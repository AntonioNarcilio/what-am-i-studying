import colors from 'colors';
import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: (post: any) => User.findById(post.author, (err: any, data: any) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err:any) =>{ console.error(colors.error(err))}),
  },

  Query: {
    posts: () => Post.find({}, (err: any, data: any) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err: any) => { console.error(colors.error(err)) }),
    
    post: (_:any, { id }:any) => Post.findById(id, (err: any, data: any) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err:any) =>{ console.error(colors.error(err))}),
  },
  Mutation: {
    createPost: (_: any, { data }: any) => Post.create(data),
    
    updatePost: (_: any, { id, data }: any) => Post.findByIdAndUpdate(id, data, { new: true }, (err: any, data: any) => {
      if (!err) {
        return data;
      } else {
        throw err;
      }
    // @ts-ignore
    }).clone().catch((err: any) => { console.error(colors.error(err)) }),

    deletePost: async (_: any, { id }: any) => {
      const deleted = await Post.findByIdAndDelete(id);
      return !!deleted; // forcando de retorne um boolean
    }
  },
}