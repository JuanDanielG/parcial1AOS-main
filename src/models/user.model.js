import pgConnection from "../service/pgConnection.service.js";

// Obtener un usuario por su nombre de usuario
export const getUserByUsernameModel = async (username) => {
  const pg = new pgConnection();
  try {
    return await pg.connection.query(
      "SELECT * FROM usuarios WHERE username = $1",
      [username]
    );
  } catch (error) {
    console.error("Error in getUserByUsernameModel:", error);
    return null;
  }
};

// Crear un nuevo usuario
export const createUserModel = async (username, passwordHash, doc) => {
  const pg = new pgConnection();
  try {
    return await pg.connection.query(
      "INSERT INTO usuarios (username, password, doc) VALUES ($1, $2, $3) RETURNING *",
      [username, passwordHash, doc]
    );
  } catch (error) {
    console.error("Error in createUserModel:", error);
    if (error.code === '23505') {
      if (error.detail.includes('username')) {
        throw new Error("Username already exists.");
      } else if (error.detail.includes('doc')) {
        throw new Error("Document already exists.");
      }
    }
    throw error;
  }
};

export default {
  getUserByUsernameModel,
  createUserModel
};
