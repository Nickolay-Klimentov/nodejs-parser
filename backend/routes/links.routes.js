/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
const linksRouter = require('express').Router();
const { Link, Script, Style } = require('../db/models');
const parser = require('../public/scripts/parser');

linksRouter.get('/', async (req, res) => {
  try {
    const links = await Link.findAll();
    res.status(200).json(links);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

linksRouter.post('/', async (req, res) => {
  const { url } = req.body;

  try {
    const { scripts, styles } = await parser(url);
    const isFinded = await Link.findOne({ where: { url } });
    if (!isFinded) {
      const newLink = await Link.create({ url });

      scripts.forEach((script) =>
        Script.create({
          filename: script,
          linkId: newLink.id,
        }),
      );

      styles.forEach((style) =>
        Style.create({
          filename: style,
          linkId: newLink.id,
        }),
      );
    }

    res.status(200).json({ scripts, styles });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = linksRouter;
