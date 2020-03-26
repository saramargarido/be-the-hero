const express = require ('express'); // importa módulo da express para dentro da variável express
const cors = require('cors');
const routes = require('./routes');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * Get: Buscar/listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * TIPOS DE PARÂMETROS:
   * Query Params: Parâmetros noemados enviados na rota após o "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * noSQL: MongoDB, CouchDB, etc
    */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333); // porta - localhost

