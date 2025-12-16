const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/login', async(req, res) => {
    try {
        console.log("Login");
        const {email, password} = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: 'The email and password are required fields'});
        }
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.json({ success: false, message: 'Incorrect email or password' });
        }

        const user = result.rows[0];

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Incorrect email or password' });
        }
        } catch (err) {
            console.error(err.message);
            res.json({ success: false, message: 'Server Error' });
        }});

app.post('/api/signup', async(req, res) => {
    try {
        console.log("Signup");
        const {email, password} = req.body;
        if (!email || !password) {
            return res.json({success: false, message: 'The email and password are required fields'});
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        try {
            console.log("a post request has arrived");
            const newsignup = await pool.query(
                "INSERT INTO users(email, password) values ($1, $2)    RETURNING*", [email, hashedPassword]);
            res.json(newsignup.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});