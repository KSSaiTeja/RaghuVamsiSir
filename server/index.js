import express, { response } from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
var port = 3000;

// Create a MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "user_form_data",
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});


// Route to handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;
  

  // Insert the form data into the database
  db.query('INSERT INTO user_data SET ?', formData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
    res.send('Form data submitted and stored in the database.');
  });
});

app.get('/checkEmail', (req, res) => {
  const email = req.query.email;

  db.query('SELECT COUNT(*) AS count FROM user_data WHERE email = ?', [email], (err, result) => {
    if (err) {
      console.error('Error checking email:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const count = result[0].count;
    res.json({ exists: count > 0 });
  });
});

app.get('/checkphone', (req, res) => {
  const phone = req.query.phone;

  db.query('SELECT COUNT(*) AS count FROM user_data WHERE phone = ?', [phone], (err, result) => {
    if (err) {
      console.error('Error checking email:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const count = result[0].count;
    res.json({ exists: count > 0 });
  });
});







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
