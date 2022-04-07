import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("hello");
});

const port = process.env.PORT;

app.listen(5000, () => console.log("App started..."))