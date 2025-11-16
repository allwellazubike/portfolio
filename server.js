// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Use ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;



// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the directory for your EJS files
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, fonts) from the 'public' folder

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// --- Your Page Routes ---

// Route for the home page
app.get('/', (req, res) => {
    // This will render views/index.ejs
    res.render('index');
});

// Route for the about page
app.get('/about', (req, res) => {
    // This will render views/about.ejs
    res.render('about');
});

// Route for the notes page
app.get('/notes', (req, res) => {
    // You will need to create views/notes.ejs
    // For now, it will just render the header, nav, footer, and chatbox
    res.render('notes'); 
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});