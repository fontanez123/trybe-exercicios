// index.js

const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const User = require('./models/User');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', async (req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.get('/books', async (req, res) => {
    const { author_id } = req.query;

    const books = author_id ? await Book.getByAuthorId(author_id) : await Book.getAll();

    res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;

    const books = await Book.findById(id);

    if(!books) return res.status(404).json({message: 'not found'});

    return res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;

	if (!await Book.isValid(title, author_id)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Book.create(title, author_id);

	res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.post('/user', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	if (!await User.isValid(firstName, lastName, email, password)){
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	const user1 = await User.create(firstName, lastName, email, password);

	res.status(201).json(user1);

})

app.get('/user', async (req, res) => {
	const users1 = await User.getAll();

	res.status(200).json(users1);
})

app.get('/user/:id', async (req, res) => {
	const { id } = req.params;

	const user1 = await User.findById(id);

    if(!user1) return res.status(404).json({message: 'not found'});

    return res.status(200).json(user1);

})

app.put('user/:id', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const { id } = req.params;

	const update = await User.updateUser(id, firstName, lastName, email, password);

	res.status(200).json(update);
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});