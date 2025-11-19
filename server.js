// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;



// EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


// home page
app.get('/', (req, res) => {
    res.render('index');
});

// about page
app.get('/about', (req, res) => {
    res.render('about');
});

// notes page
app.get('/notes', (req, res) => {
    res.render('notes'); 
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});