import jwt from 'jsonwebtoken';
module.exports = {
  encode(username){
    return jwt.sign({username},'secret');
  }
}