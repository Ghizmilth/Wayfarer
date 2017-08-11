let db = require('./models');

let posts_list = [
  {
    title: 'This place rocks!',
    imgPath: '12',
    text: 'omg my favorite place',
    userId: '23',
    cityId: 1
  },
  {
    title: 'Tattooed offal heirloom lumbersexual',
    imgPath: '12',
    text: 'Hexagon mumblecore tilde bushwick.',
    userId: '34',
    cityId: 1
  },
  {
    title: 'Cold pressed health goth',
    imgPath: '12',
    text: 'Shoreditch PBR&B celiac, ethical jean shorts 90s neutra slow-carb.',
    userId: '45',
    cityId: 1
  }
];

db.Post.remove({}, function(err, posts) {
  console.log('removed all posts');
  posts_list.forEach(function(postData) {
    var post = new db.Post({
      title: postData.title,
      text: postData.text,
      userId: postData.userId,
      cityId: postData.cityId
    });
    post.save(function(err, savedPost) {
      if (err) {
        return console.log(err);
      }
      console.log('saved ' + savedPost.title);
    });
  });
});
