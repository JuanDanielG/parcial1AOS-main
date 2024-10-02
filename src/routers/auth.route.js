import { Router } from "express";
import { Login, Register } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerValidator, loginValidator } from "../validators/auth.validators.js";

const router = Router();

router.post("/login", validate(loginValidator), Login);
router.post("/register", validate(registerValidator), Register);

export default router;
