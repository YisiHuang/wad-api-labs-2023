export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=3ec695f24203f51c5771089eb1781e6a&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };