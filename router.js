import {Router} from "express";
import PostController from './PostController.js'

const router = new Router()

router.post('/posts',PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getByID)
router.put('/posts',PostController.update)
router.delete('/posts/:id', PostController.deleteByID)

export default router;