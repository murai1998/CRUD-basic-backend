module.exports = (sequelize, Sequelize) => {
    const Dreams = sequelize.define("dreams", {
  
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Dreams;
  };