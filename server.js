// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Use ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;



// EJS as the view engine
app.set('view engine', 'ejs');
// Set the directory for EJS files
app.set('views', path.join(__dirname, 'views'));


// app.use(express.static(path.join(__dirname, 'public')));
// previous dir
// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));


// --- Page Routes ---

// Route for the home page
app.get('/', (req, res) => {
    //render views/index.ejs
    res.render('index');
});

// Route for the about page
app.get('/about', (req, res) => {
    // render views/about.ejs
    res.render('about');
});

// Route for the notes page
app.get('/notes', (req, res) => {
    res.render('notes'); 
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});