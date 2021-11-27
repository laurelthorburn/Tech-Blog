//store stuff 
// create route for the homepage but not entirely, need it to hit the body route

const router = require('express').Router();
const { route } = require('.'); // do i need this?
const { User, Post, Comment } = require('./../models');

// GET all posts
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        // User ,
      });

      const posts = dbPostData.map((post) => 
      post.get({ plain: true })
      );
    res.render("all", { 
      posts,
      loggedIn: req.session.loggedIn,
    }); //might need postData wrapped as an obj... tbd
} catch (err) {
      res.status(500).json(err);
    }
  });

  // Login route
  router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  // GET all a user's posts
  // router.get("/:user_id", async (req, res) => {
  //   try {
  //     const dbUserData = await User.findAll(req.params.user_id
  //       , {
  //       include: [{ model: Post }],
  //     }
  //     );
  
  //     const user = dbUserData.get({ plain: true });
  //     // console.log(post);
  //     console.log(user);
  //         res.render('dashboard',
  //          {
  //            user,
  //           loggedIn: req.session.loggedIn
  //         });
  //       } catch (err) {
  //         console.log(err);
  //         res.status(500).json(err);
  //       }
  // });
  
  // GET a single post
  router.get('/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id
        , {
        include: [{ model: Comment }],
      }
      );
      //   , {
      //   include: [{ model: User }, { model: Comment }],
      // }
      // );
  
      const post = dbPostData.get({ plain: true });
      // console.log(post);
      console.log(post.comments);
          res.render('post',
           {
             post,
            loggedIn: req.session.loggedIn
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
  });


module.exports = router;