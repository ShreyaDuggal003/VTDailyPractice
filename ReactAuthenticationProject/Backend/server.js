require('dotenv').config();
const express = require('express');
const router = require('./Routes/authRoute');
const cors = require('cors');
// const path = require('path');
// const authRoutes = require('./Routes/authRoutes');
 
const app = express();
app.use(express.json());

app.use(cors({
        origin: 'http://localhost:5173', 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }));
 
// app.use(express.static(path.join(__dirname, 'client', 'build')));
 
// app.use('/api/auth', authRoutes);
 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });
//  app.use(express.urlencoded())
 app.use('/api',router)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));