const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },

    include: [{ model: Product }],
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  try{
    const newCategory = await category.create({
      ...req.body,
      category_name:
      }
    )  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
