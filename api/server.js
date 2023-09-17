const express = require('express');
const userRoutes = require('./routes/userRoutes');
const coletorRoutes = require('./routes/coletorRoutes')

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/coletor', coletorRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
