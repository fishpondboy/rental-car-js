const express = require('express');
const app = express();
const router = require('./routes');
const port = 3000;

app.set('view engine', 'ejs');
app.set(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
	console.log(port);
});
