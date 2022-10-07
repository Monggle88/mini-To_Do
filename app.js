import express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi!');
});

// 미들웨어 localhost:3000/api
// json body pa
app.use('/api', express.json(), router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server start at ${PORT}`);
});
