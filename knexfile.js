module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "listapp",
      user: "root",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "listapp",
      user: "root",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "listapp",
      user: "root",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
