const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const { update } = require('../../models/User');

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//adding a new comment to an existing post

router.post('/comment', async (req, res) => {


  try {

    const newComment = await Comment.create({
      comment_content: req.body.comment_content,
      user_id: req.session.user_id,
      post_id: req.session.post_id,
    });


    console.log("============================",
    newComment,
    "*~*~*~*~*~*~*~*~*~~*~*~*~*");

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updating a user's post

router.put('/:id', async (req, res) => {
  console.log("Test console 1");
  try {
    console.log("Test console 2");
console.log(req.params.id)
    const updatedComment = Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    console.log("Test console 3");

    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//deleting user's post

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;