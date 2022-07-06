const connection = require('./UserConnection');

const serialize = (data) => ({
	id: data.id,
	firstName: data.first_name,
	lastName: data.last_name,
	email: data.email,
    password: data.password});

const isValid = (firstName, lastName, email, password) => {

if(!firstName || !lastName || !email || !password) return false;
if(typeof password !== 'string') return false;
if(password.length < 6) return false;

return true;

};

const create = async (firstName, lastName, email, password) => {
    const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)';
    return connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));

};

const getAll = async () => {
	const [users] = await connection.execute(
		'SELECT id, first_name, last_name, email, password FROM users_crud.users;',
	);
	return users.map(serialize);
};

const findById = async (id) => {
	const query = 'SELECT * FROM users_crud.users WHERE id = ?'
	const [ data ] = await connection.execute(query, [id]);

	if (data.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	return data.map(serialize)[0];
};

const updateUser = async (id, firstName, lastName, email, password) => {
    const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?'
    const [ data ] = await connection.execute(query,[firstName,lastName, email, password, id]);

    return findById(id);
}


module.exports = {
    isValid,
    create,
    getAll,
    findById,
    updateUser
};