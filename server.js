const app = require('./app');
const{PORT} = require('./utility/config');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'NEWS API',
        version: '1.0.0',
        description: 'NEWS API with Mongodb documention',
      },
      components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
    },
    apis: ['./routes/*.js'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
  app.use('/api/', require('./routes/userlogin.routes'))
  app.use('/api/', require('./routes/city.routes'))
  app.use('/api/', require('./routes/category.routes'))
  app.use('/api/', require('./routes/news.routes'))
  app.use('/api/', require('./routes/tag.routes'))
  app.use('/api/', require('./routes/termsAndConditions.routes'))

  

app.listen(PORT,()=> console.log(`Server is running on ${PORT} `))