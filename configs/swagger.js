const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "ADM kitchen bot operations!",
      version: "1.0.0",
      description: "Documentation for frontend developers",
    },
  },
  apis: ["./swagger/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
