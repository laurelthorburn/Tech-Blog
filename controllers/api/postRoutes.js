const router = require('express').Router();
const User = require('../../models/User');

// CREATE new post
router.post('/newPost', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      req.session.user_id = dbUserData.id;

      // console.log("SIGNED UP USERNAME: " + req.username)

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
