import { getUserByUsernameModel, createUserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../config/default.js";

// Función de inicio de sesión
export const Login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required.",
        });
      }
      const result = await getUserByUsernameModel(username);
  
      if (!result || !result.length || result.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password.",
        });
      }
  
      const user = result[0];
  
      const isValidPassword = await bcrypt.compare(password, user.password);
  
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password.",
        });
      }
  
      const token = jwt.sign({ id: user.id }, env.jwt_hash, {
        expiresIn: "1h",
      });
      res.status(200).json({
        success: true,
        token,
      });
      
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  };
  
// Función de registro
export const Register = async (req, res) => {
    try {
      const { username, password, doc } = req.body;
  
      if (!username || !password || !doc) {
        return res.status(400).json({
          success: false,
          message: "Username, password, and document are required.",
        });
      }
  
      // Hashear la contraseña
      const passwordHash = await bcrypt.hash(password, 10);
      
      // Crear el usuario
      await createUserModel(username, passwordHash, doc);
      
      // Respuesta de éxito
      res.status(201).json({
        success: true,
        message: "User registered successfully.",
      });
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.message.includes("Username already exists.")) {
        return res.status(409).json({
          success: false,
          message: "Username already exists.",
        });
      } else if (error.message.includes("Document already exists.")) {
        return res.status(409).json({
          success: false,
          message: "Document already exists.",
        });
      }
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  };
  
  