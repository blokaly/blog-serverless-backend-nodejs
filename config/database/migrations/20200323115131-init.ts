module.exports = {

  up: async (queryInterface, Sequelize) => {
    // book table
    await queryInterface.createTable('book', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
      },
      title: Sequelize.DataTypes.TEXT,
      author: Sequelize.DataTypes.TEXT
    });

    // author table
    await queryInterface.createTable('author', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
      },
      name: Sequelize.DataTypes.TEXT
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("book");
  }
};
