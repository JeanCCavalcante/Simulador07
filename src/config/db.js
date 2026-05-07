const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Substitua pela sua string do MongoDB Atlas ou use local
        await mongoose.connect('mongodb+srv://jcc_db_user:9NQpfWqUyjeT5DTo@cluster0.kv7szfx.mongodb.net/?appName=Cluster0');
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;