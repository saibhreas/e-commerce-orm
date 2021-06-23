const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/api/categories", (req, res) => {
  Category.findAll({
    include: [{ model: Category }]
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/categories:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((category) => {
    res.json(category);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.post('/api/categories', (req, res) => {
  return Category.create({
    "category_name" : "category_name"
  });



router.put("/api/categories:id", (req, res) => {
  Category.update({
    "category_name" : "category_name"
  },
  {
    where: {
    id: req.params.id
    }
  });   // update a category by its `id` value
});

router.delete("/api/categories:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id 
    }
  });// delete a category by its `id` value
});

module.exports = router;
