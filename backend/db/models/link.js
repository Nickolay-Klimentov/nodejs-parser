const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    static associate({ Script, Style }) {
      Link.Script = Link.hasMany(Script, {
        foreignKey: 'linkId',
      });
      Link.Style = Link.hasMany(Style, {
        foreignKey: 'linkId',
      });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    url: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'Link',
    tableName: 'Links',
  };
  Link.init(attributes, options);
  return Link;
};
