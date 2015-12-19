import gulp from 'gulp';
import util from 'gulp-util';
import {exec} from 'child_process';
import del from 'del';
import webpack from 'webpack';
import gulpWebpack from 'gulp-webpack';
import notifier from 'node-notifier';
import path from 'path';
import run from 'run-sequence';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from './config/webpack.dev.js';
import webpackProConfig from './config/webpack.pro.js';
import config from './config/config';

const $ = require('gulp-load-plugins')();

// dev server
gulp.task('dev', ()=>{
  const compiler = webpack(webpackDevConfig);
  compiler.plugin('done', (stats) => {
    run('lint');
  });

  new WebpackDevServer( compiler, {
    contentBase: './',
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(config.clientPort, config.host, (err, stats)=>{
    if (err) util.log(err);
    util.log(`webpack was listenning: http://${config.host}:${config.clientPort}`);
  });
});
// console.log(notifier);
gulp.task('lint', () => {
  return gulp.src(['./*.js', 'app/client/**/*.js', 'app/client/**/*.jsx', '!app/client/vendor/**/*'])
    .pipe($.eslint({
      globals: {
        'React': true,
        '$': true,
        'jQuery': true,
        'ReactDOM': true,
        'cx': true,
        'config': true
      }
    }))
    .pipe($.plumber({
      errorHandler(err) {
        const { fileName, lineNumber, message } = err;
        const relativeFilename = path.relative(process.cwd(), fileName);
        notifier.notify({
          title: 'ESLint Error',
          wait: true,
          message: `Line ${lineNumber}: ${message} (${relativeFilename})`
        }, (err, res) => {
          console.log('==============>',res.startsWith('Act'));
          this.on('click', obj => {
            exec(`subl --command open_file ${fileName}:${lineNumber}`);
          })
          // err && console.log(err);
          // if(res.startsWith('Activate')) {
          //   console.log('=====================================>>>>>>>')
            // exec(`subl --command open_file ${fileName}:${lineNumber}`);
          // }
        });
      }
    }))
    .pipe($.eslint.failOnError())
    .pipe($.eslint.formatEach());
});

// build
gulp.task('build', ['clean'], ()=>{
  gulp.src('app/client/app.js')
    .pipe(gulpWebpack(webpackProConfig))
    .pipe(gulp.dest('./build'));
});

// build on save
gulp.task('clean', () => {
  del('build');
});
