const sequelize = require('../config/connection');
const { User, Post } = require('../../models');

const userSeedData = require('./userSeedData.json');
const postSeedData = require('./postSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

//   for (const { id } of users) {
//     const newLicense = await License.create({
//       driver_id: id,
//     });
//   }

  for (const post of postSeedData) {
    const newPost = await Post.create({
      ...post,
    });
  }

  process.exit(0);
};

seedDatabase();
