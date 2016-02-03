import request from 'superagent';

const token = (tokenStr) => (req, next) => {
  req.header['authorization '] = 'JWT ' + tokenStr;
  next(null, (res, nextRes) => {
    nextRes();
  });
};

export default request.use(token(sessionStorage.getItem('token')));