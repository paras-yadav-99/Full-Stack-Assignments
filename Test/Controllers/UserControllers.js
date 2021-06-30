const JWT = require("jsonwebtoken");
const axios = require("axios");

exports.posts = (req, res) => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            postResponse = response;
            return res.status(200).send(postResponse);
        })
        .catch((error) => {
            return res.status(500).send("error");
        });
};


exports.postid = (req, res) => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts/:id/comments")
    postResponse.findById(req.params.id).then(review => {
        // fetch its comments
        postResponse.find({ id: req.params.id })
        .then(comments => {
            // respond with the template with both values
            res.render('reviews-show', { review: review, comments: comments })
        })
            .catch((error) => {
                console.error(error);
                return res.status(500).send("ERROR");
            });
    })
};
