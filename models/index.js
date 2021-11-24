const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Post.hasOne(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE', //well i want if the user is deleted than all their posts are deleted... but i dont want the user deleted if the post is deleted
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});
// Define a User as having many Posts, thus creating a foreign key in the `user` table
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});




module.exports = { User, Post, Comment };
