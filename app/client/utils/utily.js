import _ from 'lodash';

module.exports = {
  /*
   * 去除字符串中的html标签
   */
  saveHtml(str = '') {
    return str.replace(/<[^>]+>/g, '');
  },

  /*
   * 字符串编码, lodash 的 escape 别名
   */
  encodeText(str = '') {
    return _.escape(str);
  },

  /*
   * 字符串解码
   */
  decodeText(str = '') {
    return _.unescape(str);
  },

  /*
   * 截取字符串
   * @str: string, 要操作的字符串
   * @count: number, 截取多少个字符串
   */
  cutStr(str = '', count = 25) {
    return this.saveHtml(str).substr(0, count);
  },

  /*
   * 渲染列表
   * @data : Array,渲染的数组
   * @render : function,渲染的规则
   * 示例:
   * util.renderList(data, (item, index) => <a key={index} href={item.link}>{item.title}</a>);
   */
  renderList(data = [], render) {
    if (data && _.isArray(data)) {
      const list = [];
      _.each(data, (item, index) => {
        list.push(render(item, index));
      });
      return list;
    }
    console.error('param is not an Array');
    return false;
  }
};