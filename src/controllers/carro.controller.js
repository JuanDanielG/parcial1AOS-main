import carroModel from "../models/carro.model.js";

export const getAllCar = async (req, res) => {
  try {
    let datos = await carroModel.getCarroModel();
    res.status(200).json({
      success: true,
      msg: "Listado de carros",
      data: datos,
    });
  } catch (error) {
    console.error("Error in getAllCar:", error);
    res.status(500).json({
      success: false,
      msg: "Error al obtener los carros",
      error: error.message,
    });
  }
};

export const getCarUni = async (req, res) => {
  try {
    let { id_carro } = req.params;

    if (isNaN(id_carro)) {
      return res.status(400).json({
        success: false,
        msg: "El ID del carro debe ser un número",
      });
    }

    let data = await carroModel.getCarUniModel(id_carro);

    if (data.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "Carro no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      msg: "Detalles del carro",
      data: data[0],
    });
  } catch (error) {
    console.error("Error in getCarUni:", error);
    res.status(500).json({
      success: false,
      msg: "Error al obtener el carro",
      error: error.message,
    });
  }
};

export const postCar = async (req, res) => {
  try {
    let { nombre, anyo, empresa, id_modelo, id_color, id_motor } = req.body;
    
    if (!nombre || !anyo || !empresa || !id_modelo || !id_color || !id_motor) {
      return res.status(400).json({
        success: false,
        msg: "Todos los campos son obligatorios",
      });
    }

    if (anyo.toString().length !== 4 || isNaN(anyo)) { 
      return res.status(400).json({
        success: false,
        msg: "El año debe ser un número de 4 dígitos",
      });
    }

    let datos = await carroModel.postCarroModel(
      nombre,
      anyo,
      empresa,
      id_modelo,
      id_color,
      id_motor
    );
    res.status(201).json({
      success: true,
      msg: "Carro creado exitosamente",
      data: datos,
    });
  } catch (error) {
    console.error("Error in postCar:", error);
    res.status(500).json({
      success: false,
      msg: "Error al crear el carro",
      error: error.message,
    });
  }
};

export const putCar = async (req, res) => {
    try {
      let { id_carro } = req.params;
      let { nombre, anyo, empresa } = req.body;
  
      if (isNaN(id_carro)) {
        return res.status(400).json({
          success: false,
          msg: "El ID del carro debe ser un número",
        });
      }
  
      const updateFields = {};
      if (nombre) updateFields.nombre = nombre;
      if (anyo) updateFields.anyo = anyo;
      if (empresa) updateFields.empresa = empresa;
  
      let data = await carroModel.putCarroModel(id_carro, updateFields);
  
      res.status(200).json({
        success: true,
        msg: "Carro actualizado exitosamente",
      });
    } catch (error) {
      console.error("Error in putCar:", error);
      res.status(500).json({
        success: false,
        msg: "Error al actualizar el carro",
        error: error.message,
      });
    }
  };
    

export const deleteCar = async (req, res) => {
  try {
    let { id_carro } = req.params;

    if (isNaN(id_carro)) {
      return res.status(400).json({
        success: false,
        msg: "El ID del carro debe ser un número",
      });
    }

    let data = await carroModel.deleteCarroModel(id_carro);

    if (data.rowCount === 0) {
      return res.status(404).json({
        success: false,
        msg: "Carro no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      msg: "Carro eliminado exitosamente",
    });
  } catch (error) {
    console.error("Error in deleteCar:", error);
    res.status(500).json({
      success: false,
      msg: "Error al eliminar el carro",
      error: error.message, 
    });
  }
};

export default {
  getAllCar,
  postCar,
  getCarUni,
  putCar,
  deleteCar,
};
