import { Router } from "express";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controllers/posts.controller.js";
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.get('/posts', authRequired, getPosts)
router.get('/posts/:id', authRequired, getPost)
router.post('/posts', authRequired, createPost)
router.delete('/posts/:id', authRequired, deletePost)
router.put('/posts/:id', authRequired, updatePost)

export default router;