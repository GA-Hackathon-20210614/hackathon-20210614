module.exports = {
    index
  };

  function index(req, res) {
    // req.user will always be there for you when a token is sent
    res.render('index.html')
  }