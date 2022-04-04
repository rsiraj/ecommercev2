const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// connecting to the database and checking for errors if any are present
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Sql12345.',
//     database: 'plant_heaven'
// });
const db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b3f257a4ce2b00',
    password: '8bd82e17',
    database: 'heroku_b202e4f31c37195'
});

db.connect(err => {
    if(err) {
        return err;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());



app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.get('/api/testimonials', (req, res) => {
    db.query('SELECT * FROM testimonials', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Console server listening on port ${PORT}.`)
});
