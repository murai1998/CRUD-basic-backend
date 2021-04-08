module.exports = (sequelize, Sequelize) => {
    const Goals = sequelize.define("goals", {
  
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Goals;
  };