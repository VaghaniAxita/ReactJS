const { Router } = require("express");
const userController = require("../controller/user");
const routes = Router();
routes.post("/signup", userController.createUser)
routes.get("/", userController.getAllUsers)

module.exports = routes;