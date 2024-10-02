import pgConnection from "../service/pgConnection.service.js";

export const getCarroModel = async () => {
  const pg = new pgConnection();
  return await pg.connection.query("SELECT * FROM CARRO");
};

export const getCarUniModel = async (id_carro) => {
  try {
    const pg = new pgConnection();
    return await pg.connection.query(
      "SELECT * FROM CARRO where id_carro = $1 ",
      [id_carro]
    );
  } catch (error) {
    return [];
  }
};

export const postCarroModel = async (
  nombre,
  anyo,
  empresa,
  id_modelo,
  id_color,
  id_motor
) => {
  const pg = new pgConnection();
  return await pg.connection.query(
    "INSERT INTO CARRO (NOMBRE, ANYO, EMPRESA, id_modelo, id_color, id_motor) VALUES ($1, $2, $3, $4, $5, $6) returning *",
    [nombre, anyo, empresa, id_modelo, id_color, id_motor]
  );
};

export const putCarroModel = async (id_carro, updateFields) => {
    const pg = new pgConnection();
  
    const fields = Object.keys(updateFields);
    const values = Object.values(updateFields);
    
    if (fields.length === 0) {
      throw new Error("No hay campos para actualizar");
    }
  
    const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
    const query = `UPDATE CARRO SET ${setClause} WHERE ID_CARRO = $${fields.length + 1}`;
    const result = await pg.connection.query(query, [...values, id_carro]);
  
    if (result.rowCount === 0) {
      throw new Error("No se encontró el carro con el ID proporcionado.");
    }
  
    return result;
  };
  
  

export const deleteCarroModel = async (id_carro) => {
  const pg = new pgConnection();
  return await pg.connection.query("DELETE FROM CARRO WHERE ID_CARRO = $1", [
    id_carro,
  ]);
};

export default {
  getCarroModel,
  postCarroModel,
  getCarUniModel,
  putCarroModel,
  deleteCarroModel,
};
