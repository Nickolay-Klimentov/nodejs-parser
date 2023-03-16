const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Script extends Model {
    static associate({ Link }) {
      Script.Link = Script.belongsTo(Link, {
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
    modelName: 'Script',
    tableName: 'Scripts',
  };
  Script.init(attributes, options);
  return Script;
};
