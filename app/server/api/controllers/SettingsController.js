/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	info: function(req, res) {
    Setting.find({id:2}).exec(function findCB(err, found){
      console.log(found);
    })
    return res.json({
      name: 'eyas'
    })
  }
};

