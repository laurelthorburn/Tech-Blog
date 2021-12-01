const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

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

  console.log("Do you make it to meeee? 1") //yes 

  try {

    console.log("Do you make it to meeee? 2") //yes
    // console.log(req.session.post_id) //yes

    // console.log(req.body.comment_content) //yes
    console.log(req.session.user_id) //yes


    const newComment = await Comment.create({
      comment_content: req.body.comment_content,
      user_id: req.session.user_id,
      post_id: req.session.post_id,
    });

    console.log("HELLO, do you make it to me 3");

    console.log("============================",
    newComment,
    "*~*~*~*~*~*~*~*~*~~*~*~*~*");

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

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