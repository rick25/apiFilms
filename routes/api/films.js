const router = require("express").Router();
const { Film } = require("../../bd");

router.get("/", async (req, res) => {
  const films = await Film.findAll();
  res.json(films);
});

router.post("/", async (req, res) => {
  const film = await Film.create(req.body);
  res.json(film);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await Film.update(req.body, {
    where: { id: id },
  });
  res.json({ success: `El film con id ${id} ha sido actualizado` });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Film.destroy({
    where: { id: id },
  });
  res.json({ success: `El film con id ${id} ha sido eliminado` });
});

module.exports = router;
