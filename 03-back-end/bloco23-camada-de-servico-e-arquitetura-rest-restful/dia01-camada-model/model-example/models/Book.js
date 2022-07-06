const connection = require('./connection');


const getByAuthorId = async (authorId) => {
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  
    const [books] = await connection.execute(query, [authorId]);

    if (books.length === 0) return null;
  
    return books.map(({ id, title, author_id }) => ({
      id,
      title,
      authorId: author_id,
    }));
  };

const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT * FROM model_example.books;',
	);

    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id,
      }));
};

const getById = async (id) => {
    const query = 'SELECT * FROM model_example.books WHERE id=?;';

    const [books] = await connection.execute(query, [id]);

    if(books.length === 0) return null;

    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id,
      }))[0];
};

const isValid = async (title, id) => {
    const bookId = await getById(id);

    if (!title || title.lentg < 3) return false;
    if (!id || !bookId) return false;

    return true;
    
};

const create = async (title, id) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, id],
);

module.exports = {
	getAll,
    getByAuthorId,
    getById,
    isValid,
    create
};