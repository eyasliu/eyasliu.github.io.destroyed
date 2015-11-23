server.get('/posts/list', {
  data: (params, query) => {
    return {
      "data|5-10":[{
          "id": 1,
          "title":"@TITLE",
          "author": "@NAME",
          "permalink": "/blog/detail",
          "content": "@paragraph"
      }]
    };
  }
})