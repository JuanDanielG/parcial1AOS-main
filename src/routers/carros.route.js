import { Router } from "express";
import carroController from "../controllers/carro.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { getCarroValidator,postCarroValidator,putCarroValidator} from "../validators/carro.validators.js";

const routerCarros = Router();

routerCarros.get("/carros", carroController.getAllCar);
routerCarros.get("/carro/:id_carro", validate(getCarroValidator), carroController.getCarUni);
routerCarros.post("/carro", validate(postCarroValidator), carroController.postCar);
routerCarros.put("/carro/:id_carro", validate(putCarroValidator), carroController.putCar);
routerCarros.delete("/carro/:id_carro", validate(getCarroValidator), carroController.deleteCar);

export default routerCarros;
