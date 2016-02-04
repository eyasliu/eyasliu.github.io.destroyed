import superagent from 'superagent-defaults';

const token = (tokenStr) => (req, next) => {
  req.header['authorization '] = 'JWT ' + tokenStr;
  next(null, (res, nextRes) => {
    nextRes();
  });
};

superagent.use(token(sessionStorage.getItem('token')));


export default superagent;