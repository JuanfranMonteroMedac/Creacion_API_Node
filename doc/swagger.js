
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './doc/swagger_output.json'
const endpointsFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointsFiles)


