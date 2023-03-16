const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    static associate({ Link }) {
      Style.Link = Style.belongsTo(Link, {
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
    filename: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    linkId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Links',
        key: 'id',
      },
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
    modelName: 'Style',
    tableName: 'Styles',
  };
  Style.init(attributes, options);
  return Style;
};
