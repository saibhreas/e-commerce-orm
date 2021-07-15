const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//TODO  // find all categories be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(
      { include: Product }
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO  find one category by its `id` value be sure to include its associated Products
router.get('/:id', (req, res) => {
  try {
    const tagData = await Category.findByPk(req.params.id, {
      include: [{model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//TODO:  create a new category
router.post('/', (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//TODO: update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO: delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
