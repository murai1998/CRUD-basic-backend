module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "new_Password",
    DB: "this_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };