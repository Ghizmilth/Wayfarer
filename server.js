'use strict';

//import dependencies
let express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  Post = require('./models/post');

const cities = [
  {
    _id: 1,
    title: 'San Francisco',
    imgPath: ''
  }
];

//create instances
let app = express(),
  router = express.Router();

// set port to env or 3000
let port = process.env.API_PORT || 3001;



//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set route path and init API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
});

router.get('/cities', function(req, res) {
  res.json(cities);
});

router.get('/cities/:id', function(req, res) {
  let response = cities.filter(obj => obj._id == req.params.id);
  res.json(response);
});
//add /posts route to our /api router here
//adding the /posts route to our /api router
router
  .route("/cities/:id/posts")
  //retrieve all posts from the database mapped to a city
  .get(function(req, res) {
    //looks at our Post Schema
    Post.find({cityId: req.body.cityId},function(err, posts) {
      if (err) res.status(500).json({error:err.message});
      //                                      responds with a json object of our database posts.
      res.json(posts);
    });
  });

router
  .route("/posts")
  //post new to the database
  .post(function(req, res) {
    var post = new Post();

    //**DO WE NEED THIS?
   // post.cityId = req.body.cityId;

    post.save(function(err) {
      if (err) res.status(500).json({error:err.message});
      res.json({ message: "Post successfully added!" });
    });
  });

router
  .route("/posts/:postId")
  //The put method gives us the chance to update our post based on the ID passed to the route
  .get(function(req, res) {
    //looks at our Post Schema
    Post.find({cityId: req.body.cityId},function(err, posts) {
      if (err) res.status(500).json({error:err.message});
      //                                      responds with a json object of our database posts.
      res.json(posts);
    });
    put(function(req, res) {
    Post.findById(req.params.postId, function(err, post) {
      if (err) res.status(500).json({error:err.message});
      //make newcessary changes to db model instance
      post.title = req.body.title;
      .get(function(req, res) {
        //looks at our Post Schema
        Post.find({cityId: req.body.cityId},function(err, posts) {
          if (err) res.status(500).json({error:err.message});
          //                                      responds with a json object of our database posts.
          res.json(posts);
        });
        post.cityId = req.body.cityId
        //save leieeieieieieieieipost
        post.save(function(err) {
          if (err) res.status(500).json({error:err.message});
          res.json({ message: "Post has been updated" });
        });
      });,
  //delete method for removing a post from our database
  .delete(function(req, res) {
    //selects the post by its ID, then removes it.
    Post.remove({ _id: req.params.postId }, function(err, post) {
      if (err) res.status(500).json({error:err.message});
      res.json({ message: "Post has been deleted" });
    });
  });
//add /posts route to our /api router here

//use router config when we call /API
app.use('/api', router);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
