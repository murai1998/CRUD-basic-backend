module.exports = (sequelize, Sequelize) => {
  const Plans = sequelize.define("plans", {

    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Plans;
};