/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      filename: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      linkId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Links',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Styles', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Styles');
  },
};
