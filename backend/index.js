import connectDB from './src/db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({
    path: "./.env"
})

app.get('/', (req, res) => {
    res.send('Welcome to InsightLens!');
});

connectDB()
.then(() => {
    const port = process.env.PORT || 4000;
    const server = app.listen(port, () => {
        console.log(`Server is listening at port ${port}`);
    });

    server.on("error", (error) => {
        console.log("Server error", error);
    });
})
.catch((err) => {
    console.log("Database connection failed!!", err);
});