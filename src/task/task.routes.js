import { Router } from "express";
import { create, get, modify, deleteTask } from "./task.controller.js";

const api = Router();

//=========================//
//      Rutas Privadas    //
//=======================//

api.post('/create', create);
api.get('/', get);
api.put('/modify/:id', modify);
api.delete('/delete/:id', deleteTask);

export default api;