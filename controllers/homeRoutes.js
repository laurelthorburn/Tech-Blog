//store stuff 
// create route for the homepage but not entirely, need it to hit the body route

const router = require('express').Router();
const { route } = require('.');
const { User, Post, Comment } = require('./../models');

// router.get("/", (req, res) => {
//     res.render("all");
// });

// GET all posts
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        // User ,
      });

      const posts = dbPostData.map((post) => 
      post.get({ plain: true })
      );

console.log(posts)

    res.render("all", { 
      posts
    }); //might need postData wrapped as an obj... tbd
} catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/login", (req, res) => {
    console.log("Is the login page rendering??");
    res.render("login");

  });
  
  // GET a single post
  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment }],
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No blog post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;