const Movie = require('../models/Movie');

module.exports = {
    // Listar todos os filmes
    async index(req, res) {
        try {
            const movies = await Movie.find();
            return res.json(movies);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar filmes." });
        }
    },

    // Criar novo filme
    async store(req, res) {
        const { title, description, year, genres, image, video } = req.body;

        if (!title || !description || !year || !genres || !image || !video) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        try {
            const newMovie = await Movie.create({ title, description, year, genres, image, video });
            return res.status(201).json(newMovie);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao salvar o filme." });
        }
    },

    // Atualizar filme por ID
    async update(req, res) {
        const { id } = req.params;
        const { title, description, year, genres, image, video } = req.body;

        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                id, 
                { title, description, year, genres, image, video },
                { new: true } // Retorna o objeto atualizado
            );

            if (!updatedMovie) {
                return res.status(404).json({ error: "Filme não encontrado." });
            }

            return res.json(updatedMovie);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao atualizar o filme." });
        }
    },

    // Deletar filme por ID
    async delete(req, res) {
        const { id } = req.params;

        try {
            const movie = await Movie.findByIdAndDelete(id);

            if (!movie) {
                return res.status(404).json({ error: "Filme não encontrado." });
            }

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Erro ao deletar o filme." });
        }
    }
};