import style from './style';

export default class Detail extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={cx({
        [style.detail]: true,
        container: true
      })}>
        <article className={style.post}>
          <header className={style['post-header']}>
            <h1 className={style.title}>文章标题文章标题文章标题文章标题</h1>
            <div className={style['post-meta']}>
              <span className={style.author}>
                作者：<a href="#">Eyas Liu</a>
              </span>
              <span className={style.author}>
                2015-11-20
              </span>
            </div>
          </header>
          <section className={cx(style.content, 'post-content')}>
            <p>赶在五月底，Symfony 2.7.0 正式版发布了，这个版本是最新的 LTS（Long Term Support Version －－ 长期支持版本）版本。</p>
            <p>咱们不是 Laravel 中文网吗，干嘛提 Symfony 呢？因为 Laravel 底层依赖 Symfony 组件，所以 Symfony 的新版本，尤其是这种长期支持版本对 Laravel 也是非常重要的，况且，<a href="/post/laravel-announces-v5-1-will-be-the-first-lts/">Laravel 5.1</a> 版本将是 Laravel 世界中的头一个 LTS 版本，意义重大。</p>
            <p>另外，Symfony 2.7.0 已经提前内置了对 <a href="http://www.php-fig.org/psr/psr-7/">PSR－7</a> 的支持，新东西，请大家自行<a href="http://www.php-fig.org/psr/psr-7/">脑补一下</a>吧。对于 Laravel 来说，这一功能自然也会被 Laravel 支持的！（哈哈，搭了个顺风车 :)）</p>
            <p>Laravel 官方 Twitter 许诺6月9号发布 5.1 LTS 正式版，到时候还会有更“令人惊艳的文档”和一堆新特性。一起等待吧。。。</p>
          </section>
          <footer className={style.footer}>
          </footer>
        </article>
      </div>
    );
  }
}
