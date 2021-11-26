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
  router.get('/api/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment }],
      });
  
      const post = dbPostData.get({ plain: true });
          res.render('post', { post, loggedIn: req.session.loggedIn });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
  });


//   // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;