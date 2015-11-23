server.get('/globals/info', {
  data: (params, query) => {
    console.log(params, query);
    return {
      "data":{
        "info": {
          "title": 'Eyas',
          "description": '这只是一个博客，现在这个博客还没完成',
          "footer": 'Power by React. Built & Design by Eyas'
        },
        "navbar|0-10": [{
          "id": 1,
          "name": "@NAME",
          "link": "/"
        }]
      }
      
    };
  }
})