import express from "express";
import ClientController from "../controllers/clientController.js";

const router = express.Router();

router
  .get("/clients", ClientController.findAll)
  .get("/clients/:id", ClientController.findById) 

export default router;   