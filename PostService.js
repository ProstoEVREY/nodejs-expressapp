import Post from "./Post.js";

class PostService{
    async create(post){
            const thisPost = await Post.create(post)
            return thisPost
    }

    async getAll(){
        const allPosts = await Post.find()
        return allPosts;
    }
    async getByID(id){
            const post = await Post.findById(id);
            return post;
    }
    async update(post){
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return updatedPost;
    }

    async deleteByID(id){
            const post = await Post.findByIdAndDelete(id);
            return post
    }
}

export default new PostService();