import crypto from 'crypto';

module.exports = {
  hash(...str){
    const sha1 = crypto.createHash('sha1');
    sha1.update(str.join(''));
    return sha1.digest('hex');
  }
}