server.get('/globals/info', {
  delay: 200,
  data: (params, query) => {
    console.log(params, query);
    return {
      "data|0-10": [{
        "id": 1
      }]
    };
  }
})