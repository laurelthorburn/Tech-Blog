//store stuff 
// create route for the homepage but not entirely, need it to hit the body route

const router = require('express').Router();
const { User, Post } = require('./../models');

// router.get("/", (req, res) => {
//     res.render("all");
// });

// GET all posts
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single post
  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }],
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
  


module.exports = router;