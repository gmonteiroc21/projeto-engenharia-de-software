const { createConnectionString } = require('./connection_string');

describe('createConnectionString', () => {
    it('deve criar uma string de conexão', () => {
        const host = 'localhost';
        const username = 'user';
        const password = 'password';
        const database = 'mydb';
        const port = '5432';

        const connectionString = createConnectionString(host, username, password, database, port);

        const expectedConnectionString = `postgres://user:password@localhost:5432/mydb`;
        expect(connectionString).toBe(expectedConnectionString);
    });
});
