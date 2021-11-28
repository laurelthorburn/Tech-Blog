const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
// });

// Define a User as having many Posts, thus creating a foreign key in the `user` table
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  // onDelete: 'CASCADE',
});




module.exports = { User, Post, Comment };
