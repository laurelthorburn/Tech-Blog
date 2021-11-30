const router = require('express').Router();
const { User, Post } = require('../../models');

// // CREATE new post
// router.post('/posts', async (req, res) => {
//   try {
//     const dbPostData = await Post.create({
//       title: req.body.title,
//       post_content: req.body.post_content,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       req.session.username = dbUserData.username;
//       req.session.user_id = dbUserData.id;

//       // console.log("SIGNED UP USERNAME: " + req.username)

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

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