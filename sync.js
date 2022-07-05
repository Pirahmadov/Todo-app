fetch("http://www.omdbapi.com/?apikey=trilogy&t=lucy")
  .then((resp) => {
    const { title, year, poster } = resp;
    console.log(resp.json());
  })
  .catch((err) => {
    console.log(err);
  });
