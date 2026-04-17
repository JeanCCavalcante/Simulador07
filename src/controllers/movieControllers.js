let movies = [];

module.exports = {
      
  index(req, res) {
    return res.json(movies);
  },

  
  store(req, res) {
    const { title, description, year, genres, image, video } = req.body;

    
    if (!title || !description || !year || !genres || !image || !video) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const newMovie = {
      id: Date.now().toString(), 
      title,       
      description, 
      year,        
      genres,      
      image,       
      video      
    };

    movies.push(newMovie);
    return res.status(201).json(newMovie);
  },


  update(req, res) {
    const { id } = req.params;
    const { title, description, year, genres, image, video } = req.body;

    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex < 0) {
      return res.status(404).json({ error: "Filme não encontrado." });
    }

    const updatedMovie = { id, title, description, year, genres, image, video };
    movies[movieIndex] = updatedMovie;

    return res.json(updatedMovie);
  },

  
  delete(req, res) {
    const { id } = req.params;
    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex < 0) {
      return res.status(404).json({ error: "Filme não encontrado." });
    }

    movies.splice(movieIndex, 1);
    return res.status(204).send();
  }
};