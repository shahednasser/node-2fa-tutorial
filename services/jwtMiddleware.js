const expressJWT = require('express-jwt');

const jwtMiddleware = expressJWT({
  secret: 'supersecret',
  algorithms: ['HS256'],
  getToken: (req) => {
    return req.session.token;
  }
});

exports.jwtMiddleware = jwtMiddleware;
