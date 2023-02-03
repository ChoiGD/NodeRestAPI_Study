exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title : 'First', content: "First post!!"}]
    })
};