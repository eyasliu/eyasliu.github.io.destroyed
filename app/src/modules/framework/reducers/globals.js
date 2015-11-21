const initState = {
  info: {
    title: 'Eyas',
    description: '这只是一个博客，现在这个博客还没完成',
    footer: 'Power by React. Built & Design by Eyas'
  },
  navbar: {
    data: [{
      name: '首页',
      link: '/'
    }, {
      name: '博客',
      link: '/blog'
    }, {
      name: '关于',
      link: '/about'
    }]
  }
};

export default function globals(state = initState, action) {
  return state;
}