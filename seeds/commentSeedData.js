const { Comment } = require('../models');

const commentdata = [
    {
"comment_content": "Really was inspired by what you wrote.  Donuts really are the best food ever.",
"user_id": 2,
"post_id": 1
    },
    {
"comment_content": "I DONUT KNOW WHAT ANY OF THIS MEANS!!!!",
"user_id": 3,
"post_id": 2
    },
    {
"comment_content": "You know, my personal favorite is the Voodoo doll donut.  But honestly, I'll eat any donut.",
"user_id": 1,
"post_id": 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;