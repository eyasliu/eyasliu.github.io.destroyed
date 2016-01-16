const path = require('path');

module.exports = shipit => {
  require('shipit-deploy')(shipit);
  shipit.releasesPath = '/home/eyas/www/default';
  shipit.initConfig({
    default: {
      workspace: path.join('./deploy'),
      // workspace: 'deploy',
      deployTo: '/home/eyas/www/default',
      
      releasePath: '/home/eyas/www/',
      repositoryUrl: 'git@git.oschina.net:yuesong/startkit-app.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      key: path.join('C:', 'Users/Eyas/.ssh', 'id_rsa'),
      deleteOnRollback: false,
      shallowClone: true
    },
    pro: {
      deployTo: '/home/eyas/www/eyasliu.gthub.io',
      releasesPath: '/home/eyas/www/',
      releasePath: '/home/eyas/www/',
      // releaseDirname: 'eyasliu.gthub.io',
      repositoryUrl: 'git@git.oschina.net:yuesong/eyasliu.github.io.git',
      servers: 'eyas@startkit.eyasweb.com:3219'
    }
  });

  shipit.task('fetch', () => {
    return shipit.remote('cd /home/www/startkit && ls -al');
  });
};