import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController{
    async create(req, res){
        try {
        const {author, title, content, picture} = req.body
        const createdPost = await PostService.create({author, title, content, picture})
        res.status(200).json(createdPost)
    }
    catch (e){
        res.status(500)
            .json    }
    }

    async getAll(req, res){
        try{
            const posts = await PostService.getAll();
            return res.json(posts)
        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async getByID(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message:"No such id"})
            }
            const post = await PostService.getByID(id);
            return res.json(post)
        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try{
        const post = req.body
            if(!post._id){
                res.status(400).json({message: "Id never specified"})
            }
            const updatedPost = await PostService.update(post)
            return res.json(updatedPost)
        }catch (e){
                res.status(500).json(e)
            }
        }

    async deleteByID(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: "Id never specified"})
            }
            const post = await PostService.deleteByID(id);
            return res.json(post)
        }
        catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController();