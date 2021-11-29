//store stuff 
// create route for the homepage but not entirely, need it to hit the body route

const router = require('express').Router();
const { route } = require('.'); // do i need this?
const { User, Post, Comment } = require('./../models');
const withAuth = require('../utils/auth');

// -------------------------------------------------------------

// GET all posts
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
       include: User, 
      });

      const posts = dbPostData.map((post) => 
      post.get({ plain: true })
      );

    res.render("all", { 
      posts,
      username: req.session.username,
      loggedIn: req.session.loggedIn,
    });
    // console.log("req.username TESTTTTT:", req); //undefined for req.user/username and {} for req.body
} catch (err) {
      res.status(500).json(err);
    }
  });


// -----------------------------------------------------------------

  // dashboard route (all logged in user's posts)
  router.get('/dashboard', async (req, res) => {

   if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }

    try {
      const postData = await Post.findAll({
        // i want to show all of the user's posts
        where : { user_id : req.session.user_id }
      });
  
      const posts = postData.map((project) => project.get({ plain: true }));

  console.log(posts); //can't check really until have create new posts by this user

      res.render('dashboard', {
        posts,
        username: req.session.username,
        userID: req.session.user_id,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    } 
  });

    // ------------------------------------------------------------
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

  // -----------------------------------------------------------------
  
  // GET a single post
  router.get('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }

    try {
      const dbPostData = await Post.findByPk(req.params.id
        , {
        include: [{ model: Comment,
          attributes: [
          "comment_content",
          "createdAt"
        ], include: {
          model: User,
          attributes: ['username']
        }
      }, 
      {model: User,
         attributes: [
        "username",
      ],
    }],
      }
      );
  
      const post = dbPostData.get({ plain: true });
      // console.log(post);
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