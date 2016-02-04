import superagent from 'superagent-defaults';

const request = superagent();

request.set('Authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'))
// const token = (tokenStr) => (req, next) => {
//   req.header['authorization '] = 'JWT ' + tokenStr;
//   next(null, (res, nextRes) => {
//     nextRes();
//   });
// };
// request.use(token(sessionStorage.getItem('auth')));




module.exports = request;