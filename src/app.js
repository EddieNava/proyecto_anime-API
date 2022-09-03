//* Dependencias
const express = require("express");
const path = require("path");

//*Archivos de rutas
const programRouter = require("./programs/programs.router").router;
const chapterRouter = require("./chapters/chapters.router").router;

//* Configuraciones iniciales
const app = express();

//? Esta configuracion es para habilitar el req.body
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({ message: "All ok!" });
});

app.use("/api/v1/programs", programRouter);
//app.use("/api/v1/programs/:program_id/chapters", chapterRouter);

app.get("/uploads/animes/:imgName", (req ,res) => {
  const imgName = req.params.imgName;
  res.status(200).sendFile(path.resolve('uploads/media/covers') + '/' +imgName)
})

app.get("/uploads/anime/chapters/:chapter", (req ,res) => {
  const chapterName = req.params.chapter;
  console.log (path.resolve('uploads/media/episodes/'))
  res.status(200).sendFile(path.resolve('uploads/media/episodes/') + '/' +chapterName)
})

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

exports.default = app
exports.app = app
module.exports = app