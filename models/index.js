const User = require('./User');
const Post = require('./Post');

// Post.hasOne(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE', //well i want if the user is deleted than all their posts are deleted... but i dont want the user deleted if the post is deleted
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Define a User as having many Posts, thus creating a foreign key in the `car` table
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


module.exports = { User, Post };
