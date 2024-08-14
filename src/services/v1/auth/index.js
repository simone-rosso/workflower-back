const express = require('express');
const bodyParser = require('body-parser');
const admin = require('../../../../firebase');
const app = express();

app.use(bodyParser.json());

// Middleware para autenticación
app.use(async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (token) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken;
      next();
    } catch (error) {
      return res.status(401).send('Unauthorized');
    }
  } else {
    return res.status(401).send('Unauthorized');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));