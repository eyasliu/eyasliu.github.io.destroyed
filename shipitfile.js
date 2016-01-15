var path = require('path');

module.exports = shipit => {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: path.join(__dirname, './deploy'),
      deployTo: '/home/eyas/www/default',
      repositoryUrl: 'git@git.oschina.net:yuesong/startkit-app.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true
    },
    pro: {
      deployTo: '/home/eyas/www/eyasliu.gthub.io',
      servers: 'eyas@startkit.eyasweb.com:3219'
    }
  });

  // shipit.task('fetch', () => {
  //   return shipit.remote('cd /home/www/startkit && git clone git@git.oschina.net:yuesong/startkit-app.git');
  // });
};