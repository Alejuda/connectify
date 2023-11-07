import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("user");
  res.json(posts);
};

export const createPost = async (req, res) => {

  const {title, description, date} = req.body

  const newPost = new Post({
    title,
    description,
    date,
    user: req.user.id
  });
  const savedPost = await newPost.save();
  res.json(savedPost);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('user');
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  return res.sendStatus(204);
};
