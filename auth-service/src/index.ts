import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // TODO: Mock User
  if (username === 'admin' && password === '1234') {
    return res.json({ success: true, user: { username } });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`auth-service is running on port: ${PORT}...`);
});
