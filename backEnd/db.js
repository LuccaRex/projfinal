const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://kuohwmfm:AWDZ8BpB5E9QD-9WEAHQxRcc0gl4utVF@babar.db.elephantsql.com/kuohwmfm'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
