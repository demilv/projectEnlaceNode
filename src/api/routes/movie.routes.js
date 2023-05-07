//Listado de rutas de peliculas

const express = require("express");
const router = express.Router();

const  {getAllPeliculas, setNewPelicula, updatePelicula, deletePelicula} = require("../controllers/peliculas.controller")

router.get("/", getAllPeliculas)

router.post("/", setNewPelicula)

router.put("/:id", updatePelicula)

router.delete("/:id", deletePelicula)

module.exports = router;