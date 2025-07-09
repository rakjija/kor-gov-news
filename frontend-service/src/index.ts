import path from 'node:path';
import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/login', (_, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: ${username}, ${password}`);
  res.send('Processing login');
});

app.listen(PORT, () => {
  console.log(`Frontend service is running on port: ${PORT}...`);
});
