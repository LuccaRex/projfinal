const db = require("../db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(codigo) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos WHERE codigo=$1";
      return await connect.query(sql,[codigo]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produtos(titulo, data_cadastro, preco, descricao, imagem) VALUES ($1, $2, $3, $4, $5) RETURNING titulo, data_cadastro, preco, descricao, imagem;";
      const values = [data.titulo, data.data_cadastro, data.preco, data.descricao, data.imagem];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(codigo, data) {
    try {
      const connect = await db.connect();
      const sql = "";
      const values = [data.titulo, data.data_cadastro, data.preco, data.descricao, data.imagem, codigo];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(codigo) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produtos WHERE codigo=$1";
      return await connect.query(sql, [codigo]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produto;
