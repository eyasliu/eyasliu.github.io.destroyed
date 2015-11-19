module.exports = shipit => {
  shipit.initConfig({
    pro: {
      servers: 'eyas@startkit.eyasweb.com:3219'
    }
  });

  shipit.task('fetch', () => {
    return shipit.remote('cd /home/www/startkit && git clone git@git.oschina.net:yuesong/startkit-app.git');
  });
};