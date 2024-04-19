function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true,
  });
}

// const logPath = path.join(__basedir, '/logs/');

define('LOCAL_URL', `http://localhost:${process.env.PORT}`);
define('JS_OPTION', {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sugr.on Assignment - Extract Logo from Website',
      version: '1.1.0'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      },
      {
        url: 'http://example.com'
      }
    ]
  },
  apis: [
    './routes/index.routes.js',
    './routes/users.js'
  ]
})