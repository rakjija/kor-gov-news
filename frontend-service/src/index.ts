import path from 'node:path';
import express from 'express';
import loginRouter from './routes/login';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(loginRouter);

app.listen(PORT, () => {
  console.log(`Frontend service is running on port: ${PORT}...`);
});
