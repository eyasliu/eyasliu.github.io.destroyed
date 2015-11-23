server.get('/globals/info', {
  data: (params, query) => {
    console.log(params, query);
    return {
      "data|0-10": [{
        "id": 1,
        "name": "@NAME",
        "link": "/"
      }]
    };
  }
})