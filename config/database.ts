import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'mysql', // Alteração na linha de conexão
  connections: {
    mysql: { // Nome da conexão MySQL
      client: 'mysql', // Cliente MySQL
      connection: {
        host: 'localhost', // Host do seu banco de dados MySQL
        port: 3306, // Porta do MySQL (o padrão é 3306)
        user: 'root', // Usuário do banco de dados MySQL
        password: '', // Senha do banco de dados MySQL
        database: 'api', // Nome do banco de dados MySQL
      },
      healthCheck: true, // Adicione essa linha para verificar a saúde da conexão
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
