const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  Tag.findAll({
    include: [{ model:ProductTag  }]
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});// find all tags
// be sure to include its associated Product data

router.get('/api/tags:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id 
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/api/tags', (req, res) => {
  Tag.create({
    tag_rname: 'orange',
    isAdmin: true
  }, { fields: ['tag_name'] });
});

router.put('/:id', (req, res) => {
  Tag.update({ 
    tag_name}, {
    where: {
      id: req.params.id
    }
  });
});

router.delete('/api/tags:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  });// delete on tag by its `id` value
});

module.exports = router;
